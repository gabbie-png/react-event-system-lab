import React, { Component } from 'react'

// Code EyesOnMe Component Here
export default class EyesOnMe extends Component{
    handleFocusEvent = () => {
        console.log('Good!')
    }
    handleBlurEvent = () => {
        console.log('Hey! Eyes on me!')
    }


    render(){
        return (
            
            <button
                onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}
            ></button>
            
        )

    }
}

