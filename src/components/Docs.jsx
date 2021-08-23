import React, {Component} from 'react';
import {Accordion,Card,Container} from 'react-bootstrap';
import './Docs.css';

class Docs extends Component {
    render () {
    return (
        <div id='docs'>
        <div style={{height:'40px'}} />
        <Container className='d-flex align-items-center justify-content-center' style={{padding:'15px'}}>
            <Card style={{width:'95%', maxWidth:'750px'}}>
                <Card.Header style={{fontSize: "1.6em",background:'black', color:"white"}}  className=" text-center">How to use Crypto Generator</Card.Header>
                <Card.Body style={{background:'#333333', color:"white"}}>
                    <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                        <p>Click on Start Building to get to the builder tab.</p>
                        <div className='col'>
                            <img src='imgs/intro0.png' alt='' style={{width:'300px'}} />
                        </div>
                    </Card>
                    <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                        <p>Click Connect and use either MetaMask or WalletConnect to connect your crypto wallet.</p>
                        <div className='col'>
                            <img src='imgs/intro1.png' alt='' style={{width:'300px'}} />
                            <img src='imgs/intro2.png' alt='' style={{width:'300px'}} />
                            <img src='imgs/intro3.png' alt='' style={{width:'300px'}} />
                            <img src='imgs/intro4.png' alt='' style={{width:'300px'}} />
                        </div>
                    </Card>
                    <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                        <p>Use the Coin Name field to name your coin and the set a Symbol for your coin.</p>
                        <p>Enter the amount of supply you want in the Total Supply field and then set your coin's decimals. (18 is recommended)</p>
                        <p>Click on Create Coin and then your coin should appear.</p>
                        <div className='col'>
                            <img src='imgs/intro5.png' alt='' style={{width:'300px'}} />
                        </div>
                    </Card>
                </Card.Body>
            </Card>
        </Container>
        <Container className='d-flex align-items-center justify-content-center' style={{padding:'15px'}}>
            <Accordion style={{width:'95%', maxWidth:'750px'}}>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>How to Make Safemoon Clone</Accordion.Header>
                    <Accordion.Body style={{background:'#333333', color:"white"}}>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Go to the coin manager tab.</p>
                            <div className='col'>
                                <img src='imgs/manage0.png' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Set each of the following values in the Tokenomics tab:</p>
                            <p>Deflation percent: 5%</p>
                            <p>Liquidity percent: 0%</p>
                            <p>Dividend percent: 5%</p>
                            <div className='col'>
                                <img src='imgs/tokenomics0.JPG' alt='' style={{width:'300px'}} />
                                <img src='imgs/tokenomics1.JPG' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How to Make a Charity Coin</Accordion.Header>
                    <Accordion.Body style={{background:'#333333', color:"white"}}>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Go to the coin manager tab.</p>
                            <div className='col'>
                                <img src='imgs/manage0.png' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Go to the Charity Functions tab.</p>
                            <p>Set the desired charity wallet address to any BNB/ETH address.</p>
                            <p>Set the desired charity percentage to be sent to the wallet with every transaction.</p>
                            <div className='col'>
                                <img src='imgs/charity.JPG' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Tokenomics Explained</Accordion.Header>
                    <Accordion.Body style={{background:'#333333', color:"white"}}>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Go to the coin manager tab.</p>
                            <div className='col'>
                                <img src='imgs/manage0.png' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Go to the Tokenomics tab:</p>
                            <p>Deflation percent: This is the percentage of your coin that is burned/destroyed during every transaction to make your coin deflationary.</p>
                            <p>Liquidity percent: This is the percentage of your coin that is sent to the liquidity pool during every transaction to add backing value to your coin.</p>
                            <p>Dividend percent: This is the percentage of your coin that is redistributed to all your holders during every transaction to encourage holding.</p>
                            <div className='col'>
                                <img src='imgs/tokenomics0.JPG' alt='' style={{width:'300px'}} />
                                <img src='imgs/tokenomics1.JPG' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>General Functions Explained</Accordion.Header>
                    <Accordion.Body style={{background:'#333333', color:"white"}}>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Go to the coin manager tab.</p>
                            <div className='col'>
                                <img src='imgs/manage0.png' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Go to the General Functions tab:</p>
                            <p>Renounce Ownership: This is the button that will give away ownership of your coin.</p>
                            <div className='col'>
                                <img src='imgs/general.JPG' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>How to Add Your Coin to PancakeSwap</Accordion.Header>
                    <Accordion.Body style={{background:'#333333', color:"white"}}>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Go to the coin manager tab.</p>
                            <div className='col'>
                                <img src='imgs/manage0.png' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                        <Card style={{background:'#333333', border:'2px solid #999999', margin:'10px'}} align='center'>
                            <p>Set each of the following values in the PancakeSwap tab:</p>
                            <p>BNB Amount: Set the amount of BNB to be added to your coin's PancakeSwap liquidity pool.</p>
                            <p>Token Number: Set the amount of your coins to be added to your coin's PancakeSwap liquidity pool.</p>
                            <p>Slippage (Optional): Set the amount that the price can change during your token transactions.</p>
                            <p>Click Approve and then Add to PancakeSwap and then your coin should be listed.</p>
                            <div className='col'>
                                <img src='imgs/pancakeTab.JPG' alt='' style={{width:'300px'}} />
                            </div>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
        <div style={{height:'200px'}} />
        </div>
    );
    }
}

export default Docs;