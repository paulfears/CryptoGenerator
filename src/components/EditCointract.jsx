import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {BsXOctagonFill, BsCheck} from "react-icons/bs";
import { IconContext } from "react-icons";
import Card from 'react-bootstrap/Card';
function EditContract(props){
    return(
        <Card style={{marginBottom: "10px"}}>
        <Card.Header>
        <div className="d-flex justify-content-between">
            <p style={{fontSize: "1.5em"}}>{props.title}</p>
            <div style={{transform: "translateY(10%)", marginLeft:"5px"}}>
                <Loader visible={props.state === "loading"} type="Oval" color="#0000ff" height={25} width={25} />
                <div style={props.state === "error"? {display: "block"} : {display: "none"}}>
                    <IconContext.Provider value={{ color: "red", size:"25px"}} >
                        <BsXOctagonFill/>
                    </IconContext.Provider>
                </div>
                <div style={props.state === "success"? {display: "block"} : {display: "none"}}>
                    <IconContext.Provider value={{ color: "green", size:"25px"}}>
                        <BsCheck/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
        </Card.Header>
        <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className="d-flex align-items-end">
                    <Form.Label>{props.label}</Form.Label>
                    
                </div>
                <div className="d-flex ">
                    <Form.Control onChange={props.onChange} type={props.type} placeholder={props.placeholder} />
                    <Button  onClick={props.onSet}>Set</Button>
                    
                </div>
                <br/>
                
                <Button variant="outline-primary" onClick = {props.onGet} size="sm">Current Value</Button>
                <br/>
                <br/>
                <p>{props.getValue === undefined?null:props.getValue+props.postFix}</p>
                        
            </Form.Group>
        </Card.Body>
        </Card>
    )
}

export default EditContract;