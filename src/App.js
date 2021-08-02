import React from 'react'
import { render } from "@testing-library/react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Docs from "./components/Docs"
import Generator from './components/Generator';
import Home from './components/Home';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
class App extends React.Component{
    constructor(props){
        super(props)
        this.generator = React.createRef();
    }

    setManager = ()=>{
        this.generator.current.toggleScreen()
    }
    render(){
        return(
            <>
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
            />
            <Router>
            <Navbar bg="dark">
                
                <Container>
                    <Nav>
                        <Nav.Link><Link style={{color:"white", textDecoration:"none"}} to="/">home</Link></Nav.Link>
                        <Nav.Link><Link style={{color:"white", textDecoration:"none"}} to="/generator">builder/manager</Link></Nav.Link>  
                        <Nav.Link><Link style={{color:"white", textDecoration:"none"}} to="/docs">docs</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
                
            <div style={{height: "100px"}}></div>
            <Container>
                <Switch>
                    <Route path="/docs"><Docs/></Route>
                    <Route path="/generator"><Generator screen="minter" ref={this.generator}/></Route>
                    <Route path="/"><Home/></Route>
                </Switch>
            </Container>
            </Router>
            </>
        )
    }
}

export default App;