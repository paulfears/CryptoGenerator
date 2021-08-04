import React from 'react';

import ContractFrameABI from './ContractFrameABI';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import EditContract from './EditCointract';
import pancakeswapRouterABI from './PancakeswapRouterABI';
import AddLiquidityPancake from './AddliquidityPancake';

class CoinManager extends React.Component{
    //this.props.coinAddress
    //this.props.web3
    //this.props.Account
    //this.props.coinContract
    constructor(props){
        super(props);
        
        this.state = {
            
            address : this.props.coinAddress,
            web3 : this.props.web3,
            renounceOwnerShipAttemp: false,
            account_index: 0,
            charityAddressInput: "",
            inputs: {
                "charityWallet":null,
                "_charityFee":null,
                "_burnFee":null
            },
            currentValues:{
                charityAddress: null
            },
            states: {
                setcharityWallet : null,
                setChartityFeePercent : null,
            }
        }
        this.abi = ContractFrameABI
        this.routerabi = pancakeswapRouterABI
    }

    setContractAttribute = (functionName, inputName)=>{
        return async ()=>{
            console.log(functionName)
            console.log(this.props.contract.methods)
            let setAttributeFunc = this.props.contract.methods[functionName](this.state.inputs[inputName])
            let totalGas = await setAttributeFunc.estimateGas({from: this.props.Account})
            this.setState((state)=>{
                let states = state.states
                states[functionName] = "loading"
                return {states: states}
            })
            setAttributeFunc.send({
                from: this.props.Account,
                gas: totalGas
            })
            .on('receipt',()=>{
                this.setState((state)=>{
                    let states = state.states
                    states[functionName] = "success"
                    return {states: states}
                })
            })
            .on('error', ()=>{
                this.setState((state)=>{
                    let states = state.states
                    states[functionName] = "error"
                    return {states: states}
                })
            })
        }
    }

    renounceOwnerShip = async ()=>{
        let func = this.props.contract.methods.renounceOwnership()
        let totalGas = await func.estimateGas({from: this.props.Account})
        func.send({
            from: this.props.Account,
            gas: totalGas
        })
    }

    

    
    
    setCharityPercent = async ()=>{
        let setCharityPercentfunc = this.props.contract.methods.setChartityFeePercent(this.state.inputs["_charityFee"])
        let totalGas = await setCharityPercentfunc.estimateGas({from: this.props.Account})
        this.setState({state: "loading"})
        setCharityPercentfunc.send(
            {
                from: this.props.account,
                gas: totalGas
            }
        )
        
    }
    
    setCharityAddress = async ()=>{
        console.log(this.state.inputs)
        let setCharityfunc = this.props.contract.methods.setcharityWallet(this.state.inputs["charityWallet"])
        let totalGas = await setCharityfunc.estimateGas({from: this.props.Account})
        this.setState({state: "loading"})
        setCharityfunc.send({
            from: this.props.Account,
            gas: totalGas
        })
        .on('receipt',()=>{
            this.setState((state)=>{
                let states = state.states
                states.setcharityWallet = "success"
                return {states: states}
            })
        })
        .on('error', ()=>{
            this.setState((state)=>{
                let states = state.states
                states.setcharityWallet = "error"
                return {states: states}
            })
        })
    }

    updateAttribute = (attribute) =>{
        
        return async (e)=>{
            console.log(this.state.inputs)
            this.setState((state)=>{
                let inputs = state.inputs;
                inputs[attribute] = e.target.value;
                return {inputs:inputs}
            })
        }
    }

    getContractAttribute= (attribute)=>{ //function generate that gets an attribute from the contract and sets the corrisponding currentValue
        return async ()=>{
            let getFunction = this.props.contract.methods[attribute]()
            let value = await getFunction.call()
            this.setState((state)=>{
                let currentValues = state.currentValues;
                currentValues[attribute] = value;
                return {currentValues: currentValues}
            })
        }
    }

    componentDidMount(){
        console.log(this.props.contract.methods)
    }
    render(){
        return(<>
            
            <h1 className="display-4">{this.props.name}</h1>
            <p>{this.props.address}</p>
            <br/>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Charity Functions</Accordion.Header>
                    <Accordion.Body> 
                        <EditContract 
                            title="Charity Wallet"
                            label="Set Charity wallet Address"
                            type="text"
                            postFix=""
                            onGet={this.getContractAttribute('charityWallet')}
                            getValue={this.state.currentValues.charityWallet}
                            onSet={this.setContractAttribute('setcharityWallet', 'charityWallet')}
                            onChange={this.updateAttribute('charityWallet')}
                            placeholder="new charity Wallet address"
                            state={this.state.states.setcharityWallet}
                        />
                        <EditContract 
                            title="Charity Percent"
                            label="Set Charity wallet Tax percent"
                            type="number"
                            postFix="%"
                            onGet={this.getContractAttribute('_charityFee')}
                            getValue={this.state.currentValues._charityFee}
                            onSet={this.setContractAttribute("setChartityFeePercent", "_charityFee")}
                            onChange={this.updateAttribute('_charityFee')}
                            placeholder="new charity tax percent"
                            state={this.state.states.setChartityFeePercent}
                        />
                        
                        
                        
                    </Accordion.Body>
                </Accordion.Item><Accordion.Item eventKey="1">
                    <Accordion.Header>Tokenomics</Accordion.Header>
                    <Accordion.Body> 
                    <EditContract 
                            title="Deflation percent"
                            label="set the percent of tokens burned with every transaction"
                            type="number"
                            postFix="%"
                            onGet={this.getContractAttribute('_burnFee')}
                            getValue={this.state.currentValues._burnFee}
                            onSet={this.setContractAttribute('setBurnFeePercent', '_burnFee')}
                            onChange={this.updateAttribute('_burnFee')}
                            placeholder="burn fee percent"
                            state={this.state.states.setBurnFeePercent}
                    />
                    <EditContract 
                            title="liquidity Percent"
                            label="set the percent of tokens to be sent to the liquidity pool every transaction"
                            type="number"
                            postFix="%"
                            onGet={this.getContractAttribute('_liquidityFee')}
                            getValue={this.state.currentValues._liquidityFee}
                            onSet={this.setContractAttribute('setLiquidityFeePercent', '_liquidityFee')}
                            onChange={this.updateAttribute('_liquidityFee')}
                            placeholder="Liquidity fee percent"
                            state={this.state.states.setLiquidityFeePercent}
                    />
                    <EditContract 
                            title="Dividend Percent"
                            label="set the percent of tokens to be payed as a dividend with every transaction"
                            type="number"
                            postFix="%"
                            onGet={this.getContractAttribute('_taxFee')}
                            getValue={this.state.currentValues._taxFee}
                            onSet={this.setContractAttribute('setTaxFeePercent', '_taxFee')}
                            onChange={this.updateAttribute('_taxFee')}
                            placeholder="redistribution percent"
                            state={this.state.states.setTaxFeePercent}
                    /> 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>General Functions</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="danger" onClick={()=>this.setState({renounceOwnerShipAttemp: true})}>renounceOwnership</Button>
                        {this.state.renounceOwnerShipAttemp? 
                        <>
                        <p>This will mean that you no longer have the ability to call edit any of the contract parameters</p>
                        <p>are you sure?</p>
                        <Button variant="success" onClick={()=>this.setState({renounceOwnerShipAttemp: false})}>no</Button>
                        <Button variant="danger" onClick={this.renounceOwnerShip}>yes</Button> 
                        </>
                        :
                        null
                        }
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>PancakeSwap</Accordion.Header>
                    <Accordion.Body>
                        <AddLiquidityPancake 
                        contract={this.props.contract} 
                        web3={this.props.web3} 
                        tokenAddress={this.props.address} 
                        Account={this.props.Account}/>
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </>)
        
    }
}


export default CoinManager;