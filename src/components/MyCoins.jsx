import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class MyCoins extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            accounts : this.props.accountList,
            accountIndex: 0,
            coins: [],
            selection: true,
        }
    }



    





    render(){
        return(
            <div id="coinSelection" 
                style={this.state.selection? {display:"block"}: {display:"none"}} //only displays if selection menu is up
            >
                <ListGroup>
                {this.props.coins.length>0?
                    <div style={{overflowY: 'scroll'}}>
                        {this.props.coins}
                    </div>
                    :
                    <p className="lead">You haven't created any coins yet with this account on this chain</p>
                }
                </ListGroup>
            </div>
        )
    }
}

export default MyCoins;