import { render } from '@testing-library/react';
import React from 'react';


class Slider extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
        <span>
        <label className="switch">
            <input type="checkbox" checked={this.props.checked} onClick={this.props.onClick}/>
            <span className="slider round"></span>
        </label>
        </span>
        )
    }

}

export default Slider;