
import React, { Component } from 'react';

class Input extends Component {

    render(){
        return(
            <div className="input-box-container">
                <p>Insert your text here:</p>
                <input type="text" className="input-box" />
            </div>
        )
    }
}

export default Input;