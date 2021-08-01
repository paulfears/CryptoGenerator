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
                    {this.props.coins}
                </ListGroup>
            </div>
        )
    }
}

export default MyCoins;