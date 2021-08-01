import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'



class ChainDialog extends React.Component{

    constructor(props){
        super(props)
        this.state = {show: false}
    }

    

    render(){
    return(
        <Modal show={this.props.show} onHide={this.props.onClose}>
            <Container>
                <center>
                    <br/>
                    <br/>
                    <h1>You are not connect to binance smart chain</h1>
                    <hr/>
                    <p>You must switch MetaMask to smartchain to use this app</p>
                    <p>learn how to connect metamask to binance smartchain</p>
                    <a className="btn btn-primary" href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain">here</a>
                    <br/>
                    <br/>
                </center>
            </Container>

        </Modal>
    )
    }
}

export default ChainDialog;