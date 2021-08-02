import React from 'react';
import ContractFactoryABI from './ContractFactorABI';

import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ClipLoader from "react-spinners/ClipLoader";
import ListGroup from "react-bootstrap/ListGroup";
import ChainDialog from './ChainDialog';
import RawInput from './RawInput';

class Minter extends React.Component{

    constructor(props){
        //required props
        //web3
        //connected
        //addresslist
        super(props);
        this.state = {
            name: "",
            symbol: "",
            supply: 1,
            decimals: 18,
            connected: false,
            showBinaceWarning: false,
            loading: false,
            accountIndex: 0,
        }
    }

    updateName = (e) =>{
        console.log(e)
        this.setState({name: e.target.value});
        this.logState();
    }

    logState = () =>{
        console.log(this.state);
    }

    updateSymbol = (e) =>{
        this.setState({symbol: e.target.value});
    }
    updateSupply = (e) =>{
        this.setState({supply: Number(e.target.value)});
    }
    updateDecimals = (e) =>{
        if(e.target.value > 250){
            this.setState({deciamls: 250})
        }
        else if(e.target.value < 1){
            this.setState({deciamls: 1})
        }
        else{
            this.setState({decimals: parseInt(e.target.value, 10)});
        }
    }

    

    createToken = async (e) =>{
        this.openSpinner();
        let chainId = await this.props.web3.eth.getChainId()
        if(chainId == 56){
            this.tokenFactory = new this.props.web3.eth.Contract(ContractFactoryABI,"0xB614a403594a48E21B14a850CB0b2ed1eAD23B3c");
        }
        else if(chainId == 1){
            this.tokenFactory = new this.props.web3.eth.Contract(ContractFactoryABI,"0x4D04B95Aa1A5d9e19d43fa1dCF90d9c551354a6D");
        }
        else{
            alert("metamask must either be connected to etherium mainnet or binance smart chain mainnet");
            return;
        }
        console.log(this.state);
        this.price = await this.tokenFactory.methods.price().call()
        console.log(this.price)
        console.log(this.tokenFactory.methods);
        this.createCoinFunction = this.tokenFactory.methods.createCoin(
            this.state.name, 
            this.state.symbol, 
            this.state.supply, 
            this.state.decimals
        );
        
        const gasAmmount = await this.createCoinFunction.estimateGas({
            from: this.props.accountList[this.state.accountIndex],
            value: this.price
        })
        
        this.newCoin = await this.createCoinFunction.send({
            from: this.props.accountList[this.state.accountIndex],
            gas: gasAmmount,
            value: this.price,
        }).on('error', (e)=>{alert("an error occured"); alert(e)})
        
        console.log(this.newCoin);
        this.closeSpinner();
        
        
    }

    openSpinner = ()=>{
        this.setState({loading: true})
    }

    closeSpinner = ()=>{
        this.setState({loading: false})
    }

    closeDialog = ()=>{
        this.setState({showBinaceWarning: false})
    }

    render(){
        return (
        <>

        <ChainDialog show={this.state.showBinaceWarning} onClose={this.closeDialog}/>
        
        

            
            <div style={this.props.connected ? {display: "block"} : {display: "none"}}>
                
                

                <RawInput label="Coin Name" type="text" id="name" placeholder="e.g. bitcoin" onChange={this.updateName}/>
                <br/>
                <RawInput label="Symbol" type="text" id="symbol" placeholder="e.g. btc" onChange={this.updateSymbol}/>
                <br/>
                <RawInput label="Total Supply" type="number" id="supply" placeholder="e.g. 21000000" onChange={this.updateSupply}/>
                <br/>
                <InputGroup>
                    <InputGroup.Text>Decimals</InputGroup.Text>
                    <FormControl type="number" id="Decimals" value={this.state.decimals} max="250" min="1" placeholder="e.g. 8" onChange={this.updateDecimals}></FormControl>
                </InputGroup>
                <br/>
                <div style={{display:"flex"}}>
                    <Button variant="outline-primary" style={{marginRight: "10px"}} onClick={this.createToken}>Create Coin</Button>
                    <ClipLoader loading={this.state.loading}  size={25} />
                </div>
            </div>
        
        </>
        )
    }
}

export default Minter;