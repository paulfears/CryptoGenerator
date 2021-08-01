import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class RawInput extends React.Component{
    
    render(){
        return(
        <InputGroup>
            <InputGroup.Text>{this.props.label}</InputGroup.Text>
            <FormControl type={this.props.type} id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChange}></FormControl>
        </InputGroup>
        )
    }
}

export default RawInput;