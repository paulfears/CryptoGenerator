import { render } from '@testing-library/react';
import './App.css';
import ContractFactoryABI from './components/ContractFactorABI';
import ContractFrameABI from './components/ContractFrameABI';

import Minter from "./components/minter.jsx"
import MyCoins from "./components/MyCoins.jsx"
import Button from "react-bootstrap/Button"
import Slider from "./components/Slider";
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import React from 'react';
import Web3 from 'web3'
import CoinManager from './components/CoinManager';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      screen: "minter",
      connected: false,
      addressList: [],
      web3: null,
      coins: [],
      accountIndex: 0,
      accounts: [],
      contracts: [],
      currentCoinContract: null,
      currentCoinName: null,
      currentCoinAddress: null
    }
    
  }

  toggleScreen = ()=>{
    if(this.state.screen === "minter"){
      this.setState({screen: "mycoins"});
    }
    else{
      this.setState({screen: "minter"});
    }
  }

  disconnectMetaMask = async(e)=>{
    this.setState({connected: false})
  }

  addMetamask = async (address, contract) =>{
    //let decimals = await
    let symbol = await contract.methods.symbol().call()
    let decimals = await contract.methods.decimals().call()
    let name = await contract.methods.name().call()
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: address, // The address that the token is at.
          symbol: symbol,
          decimals: decimals,
          name: name
        },
      },
    });
  }

  connectMetaMask = async (e) =>{
    this.accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    console.log(this.accounts);
    this.web3 = new Web3(window.ethereum);
    this.chainID = await this.web3.eth.getChainId();
    console.log("this.chainID === ", this.chainID);
    if(this.chainID !== 56){
        this.setState({showBinaceWarning: true})
        return;
    }
    this.setState({web3: this.web3});
    this.setState({connected: true});
    this.setState({addressList: this.accounts});
    this.getUserCoins();
  }

  manageCoin = (coinContract, address, coinName) => {
    
    this.setState({currentContract: coinContract})
    this.setState({currentCoinName: coinName})
    this.setState({currentCoinAddress: address})
    this.setState({screen: "manager"})
  }

  getUserCoins = async ()=>{
    this.tokenFactory = new this.web3.eth.Contract(ContractFactoryABI,"0xB614a403594a48E21B14a850CB0b2ed1eAD23B3c");
    console.log("begin waiting")
    console.log(this.tokenFactory.methods)
    const number = await this.tokenFactory.methods.numberOfCoins(this.state.addressList[this.state.accountIndex]).call();
    let coinIds = [];
    for(let i =0; i<number; i++){
        coinIds.push(await this.tokenFactory.methods.ownersContracts(this.state.addressList[this.state.accountIndex], i).call());
    }
    console.log(coinIds);
    let coins = [];
    let contracts = [];

    
    for(let i = 0; i<coinIds.length; i++){
        
        let address = await this.tokenFactory.methods.contracts(this.state.addressList[this.state.accountIndex], coinIds[i]).call();
        console.log(ContractFrameABI);
        console.log(address);
        let coinContract = new this.web3.eth.Contract(ContractFrameABI, address);
        contracts.push(coinContract);
        let coinName = await coinContract.methods.name().call()
        coins.push(
            <ListGroup.Item key={i}>
              
                <div className="d-flex justify-content-between">
                    <div>
                    {coinName} 
                    </div>
                    <div>
                      <Button size="sm" variant="outline-primary" onClick={()=>{this.manageCoin(coinContract, address, coinName)}}>Manage</Button>
                      <Button size="sm" variant="outline-primary" onClick={()=>{this.addMetamask(address, coinContract)}}>Add to Metamask</Button>
                    </div>
                    
                </div>
                {address}
                
            </ListGroup.Item>
        )
    }
    this.setState({coins : coins, contracts: contracts})
  }
  
  render(){
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        
        <Container>
        <div style={{height: "100px"}}></div>
        
        <div style={{width: "50%"}}>
            
            
            <div style={{display:"flex"}}>
              <Slider onClick={this.toggleScreen}/>
              <p style={{marginLeft: "20px", transform: "translateY(-40%)"}} className="display-4">coin {this.state.screen === "minter"? "minter" : "manager"}</p>
              
            </div>
            
            {this.state.connected?null:<Button variant="warning" size="sm" onClick={this.connectMetaMask}>Connect</Button>}
            {this.state.connected?
            <div className="d-flex">
            <Button size="sm" variant="warning" onClick={this.disconnectMetaMask}>Disconnect</Button>
            <h5 style={{marginLeft: "10px"}}>Connected {this.state.addressList[0]?
              this.state.addressList[0].substring(0,6)+"..."+this.state.addressList[0].slice(this.state.addressList[0].length-4)
              :
              null}
            </h5>
            
            </div>
            :null}
                  
            
            <div style={{height: "100px"}}></div>
            <div className="Screens" style={this.state.connected? {"display":"block"} : {"display":"none"}}>
              
              <br/>
              <br/>
              {this.state.screen === "minter"? 
                <Minter web3={this.state.web3} accountList={this.state.addressList} connected={this.state.connected}/>
                :
                null
              }
              {this.state.screen === "mycoins"? 
                <MyCoins coins={this.state.coins} accountList={this.state.addressList} connected={this.state.connected}/>
                :
                null
              }
              {this.state.screen === "manager"?
                <CoinManager 
                contract={this.state.currentContract} 
                name={this.state.currentCoinName} 
                address={this.state.currentCoinAddress} 
                web3={this.state.web3}
                Account={this.accounts[0]}
                />
                :
                null
              }
            </div>
        </div>
        </Container>
        <div style={{height: "100px"}}></div>
      </>
    );
  }
}

export default App;
