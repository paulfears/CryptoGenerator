import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Generator from './Generator'
function Home(){
    return(
        <div>
            <p className="display-3">Crypto Generator</p>
            <p className="display-6">easily create and manage your own crypto currency</p>
            <p>
            Crypto generator allows you to create both etherium erc20's as well as binance smart chain BEP20 coins. 
            And allows for the creation of charity tokens and safemoon clones. You will have 100% ownership of your token contract and all inital supply.
            </p>
            <Router>
                <Switch>
                    <Route path="/generator"><Generator screen="minter"/></Route>
                </Switch>
            </Router>
            <Link style={{color:"white", textDecoration:"none"}} to="/generator"><a className="btn btn-outline-primary btn-lg">Start Building</a></Link>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="display-6">Features</p>

        </div>
    )

}

export default Home;