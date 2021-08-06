import React from 'react'
import pancakeswapRouterABI from './PancakeswapRouterABI'
import PancakeswapFactoryABI from './PancakeswapFactoryABI'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Loader from "react-loader-spinner";
import {BsXOctagonFill, BsCheck} from "react-icons/bs";
import { IconContext } from "react-icons";

/*
props:
web3
Account
coinContract
tokenAddress
*/
class AddLiquidityPancake extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bnbValue: 0,
            tokenNumber: 1000,
            slippage: 0.5,
            status: "null",
            approved: false
        }
        this.pancakeRouter = new this.props.web3.eth.Contract(pancakeswapRouterABI, "0x10ED43C718714eb63d5aA57B78B54704E256024E")

    }

    bnbAmmountUpdate = (e)=>{
        this.setState({bnbValue: (Number(e.target.value)*(10**18)).toString()})
    }
    tokenNumberUpdate = (e)=>{
        this.setState({tokenNumber: e.target.value})
    }

    approveTokens = async () =>{
        this.setState({status: "loading"})
        let approvefunc = this.props.contract.methods.approve(
            "0x10ED43C718714eb63d5aA57B78B54704E256024E",
            this.state.tokenNumber.toString()
        )
        console.log(await approvefunc.estimateGas({from: this.props.Account}))

        this.setState({status: "loading"})
        await approvefunc.send({
            from: this.props.Account
        }).on('receipt',()=>{
            this.setState({status: "success"})
            this.setState({approved: true})
        })
        .on('error', ()=>{
            this.setState({status: "error"})
        })
       
    }

    slippageUpdate = (e)=>{
        this.setState({slippage: Number(e.target.value)})
    }

    

    addLiquidityBNB = async ()=>{
        
        
        let address = this.props.tokenAddress
        let tokenNumber = (this.state.tokenNumber)
        let tokenMin = tokenNumber-(tokenNumber*(this.state.slippage/100))
        let bnbMin = this.state.bnbValue - (this.state.bnbValue*(this.state.slippage/100))
        let to = this.props.Account
        let deadline = Math.floor((Date.now()/1000)+60*10)
        console.log("address: ",address)
        console.log("token number: ",tokenNumber)
        console.log("bnbMin ", bnbMin)
        console.log("tokenMin ", tokenMin)
        console.log("to ", to)
        console.log("deadline ",deadline)
        let addLiquidity = this.pancakeRouter.methods.addLiquidityETH(
            address,
            tokenNumber.toString(),
            tokenMin.toString(),
            bnbMin.toString(),
            to,
            deadline
        )
        let gasAmmount = await addLiquidity.estimateGas({
            from: this.props.Account,
            value: this.state.bnbValue
        })
        this.setState({status: 'loading'})
        await addLiquidity.send({
            gas: gasAmmount,
            from: this.props.Account,
            value: this.state.bnbValue
        })
        .on('receipt', async ()=>{
            this.setState({status: "success"})
            this.pancakeFactory = new this.props.web3.eth.Contract(PancakeswapFactoryABI, "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73");
            let lpPair = await this.pancakeFactory.methods.getPair("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", this.props.tokenAddress).call()
            let symbol = await this.props.contract.methods.symbol().call()
            let name = await this.props.contract.methods.name().call()
            const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                address: lpPair, // The address that the token is at.
                symbol: symbol+"-LP",
                decimals: 18,
                name: name+"-LP"
                },
            },
            });
            //wbnb address: 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
        })
        .on('error', ()=>{
            this.setState({status: "error"})
        })

    }

    render(){
        return(
        <Form>
            <div className="d-flex justify-content-between">
                <p className="lead">launch to pancakeswap</p>
                
                <Loader visible={this.state.status === "loading"} type="Oval" color="#0000ff" height={20} width={20} />
                <div style={{transform: "translateY(10%)"}}>
                    {this.state.status === "error"?
                        <IconContext.Provider value={{ color: "red", size:"20px"}} >
                                <BsXOctagonFill/>
                        </IconContext.Provider>
                    :
                        null
                    }
                    {this.state.status === "success"?
                        <IconContext.Provider value={{ color: "green", size:"20px"}}>
                                <BsCheck/>
                        </IconContext.Provider>
                    :
                        null
                    }
                </div>
            </div>
            <Form.Label>bnbAmount</Form.Label>
            <Form.Control type="number" step="0.1" onChange={this.bnbAmmountUpdate} placeholder="bnb ammount"></Form.Control>
            <Form.Label>token number</Form.Label>
            <Form.Control type="number" min="1000" value={this.state.tokenNumber} onChange={this.tokenNumberUpdate} placeholder="number of tokens"></Form.Control>
            <br/>
            <div className="d-flex">
                <Button onClick={this.approveTokens}>approve</Button>
                <Button onClick={this.addLiquidityBNB} disabled={!this.state.approved}>Add to pancakeswap</Button>
                
            </div>
            <br/>
            <Accordion>
                <Accordion.Header>advanced</Accordion.Header>
                <Accordion.Body>
                    <Form.Label>slippage</Form.Label>
                    <p>{this.state.slippage}%</p><Form.Range value={this.state.slippage} step="0.5" max="30" min="0" onChange={this.slippageUpdate}/>
                </Accordion.Body>
            </Accordion>
        </Form>
        )
    }
}
export default AddLiquidityPancake;