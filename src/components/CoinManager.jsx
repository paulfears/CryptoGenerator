import React from 'react';

import ContractFrameABI from './ContractFrameABI';

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
            Account: this.props.Account
        }
        this.abi = ContractFrameABI
    }

    
    setCharityAddress(charityAddress){
        this.props.coinContract.methods.setcharityWallet(charityAddress)
    }

    render(){
        <>
            <h1 className="display-4">{this.props.name}</h1>
            <p>{this.props.coinAddress}</p>
        </>
    }
}


export default CoinManager;