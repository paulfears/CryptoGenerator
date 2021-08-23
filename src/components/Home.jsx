import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Generator from './Generator';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CharityImg from '../images/charity.jpeg';
import PancakeImg from '../images/pancakeswap.png';
import RewardsImg from '../images/rewards.jpeg';
import BscEth from '../images/4.jpg';
function Home(){
    return(
        <div>
            <p className="display-3">CryptoGenerator <b style={{color: "green"}}>(live)</b></p>
            <p className="display-6">easily create and manage your own crypto currency</p>
            <p>
            CryptoGenerator allows you to create both Etherium ERC-20's as well as Binance Smart Chain BEP-20 coins. 
            Also allowing the creation of charity tokens and Safemoon clones. You will have 100% ownership of your token contract and all initial supply.
            </p>
            <Router>
                <Switch>
                    <Route path="/generator"><Generator screen="minter"/></Route>
                </Switch>
            </Router>
            <Link style={{color:"white", textDecoration:"none"}} to="/generator"><div className="btn btn-outline-primary btn-lg">Start Building</div></Link>
            <div style={{height: '200px'}}></div>
            <p className="display-6">Features</p>
            <br/>
            <br/>
            <CardGroup>
                <Card style={{padding: '10px'}}>
                    <Card.Img style={{objectFit: 'cover', width: '100%', height: '15vw', minHeight:'200px'}} variant="top" src={CharityImg}/>
                    <Card.Title style={{fontSize: "1.6em"}} className="lead text-center">Charity Functionality</Card.Title>
                    
                    <p className="text-center">CryptoGenerator allows any created token to add charity functionality on the fly.</p>
                </Card>
                <Card style={{padding: '10px'}}>
                    <Card.Img style={{objectFit: 'cover', width: '100%', height: '15vw', minHeight:'200px'}} variant="top" src={RewardsImg}/>
                    <Card.Title style={{fontSize: "1.6em"}} className="lead text-center">Advanced Tokenomics</Card.Title>
                    
                    <p className="text-center">CryptoGenerator allows the owner to add burning or redistribution tokenomics to any created coin, similar to Safemoon.</p>
                </Card>
                <Card style={{padding: '10px'}}>
                    <Card.Img style={{objectFit: 'cover', width: '100%', height: '15vw', minHeight:'200px'}} variant="top" src={PancakeImg}/>
                    <Card.Title style={{fontSize: "1.6em"}} className="lead text-center">Direct Launch to PancakeSwap</Card.Title>
                    
                    <p className="text-center">BSC tokens can instantly be launched to PancakeSwap with no hassle.</p>
                </Card>
                <Card style={{padding: '10px'}}>
                    <Card.Img style={{objectFit: 'cover', width: '100%', height: '15vw', minHeight:'200px'}} variant="top" src={BscEth}/>
                    <Card.Title style={{fontSize: "1.6em"}} className="lead text-center">Etherium or Binance</Card.Title>
                    
                    <p className="text-center">Both Binance Smart Chain tokens and Etherium tokens can be created instantly.</p>
                </Card>
            </CardGroup>
            
            <div style={{height: '200px'}}></div>
            <p className="display-6">Use Cases</p>
            <br/>
            <br/>
            <CardGroup>
                <Card>
                    <Card.Header style={{fontSize: "1.6em"}}  className=" text-center">Safemoon Clones</Card.Header>
                    <Card.Body>All tokens created can be instantly converted with the manager using burning, liquidity, and redistribution popularized by Safemoon.</Card.Body>
                </Card>
                <Card>
                    <Card.Header style={{fontSize: "1.6em"}}  className=" text-center">Meme Tokens</Card.Header>
                    <Card.Body>Own your very own meme token (elone-doge-moon, poopbazooka, $elongrugpull) and any other shitcoin you can come up with.</Card.Body>
                </Card>
                <Card>
                    <Card.Header style={{fontSize: "1.6em"}}  className=" text-center">Charity Tokens</Card.Header>
                    <Card.Body>With optional, but built-in charity functionality, crypto generator will allow you to create a force for positive change.</Card.Body>
                </Card>
                <Card>
                    <Card.Header style={{fontSize: "1.6em"}}  className=" text-center">Smart Tokens</Card.Header>
                    <Card.Body>Combine these features in anyway you see fit to create the next huge cryptocurrency.</Card.Body>
                </Card>
            </CardGroup>
            <div style={{height:"100px"}}></div>
        </div>
    )

}

export default Home;