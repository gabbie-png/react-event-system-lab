import React, { Component } from 'react'
// Code Keypad Component Here
export default class Keypad extends Component{


    handleKeyUp = (e) =>{
        //debugger
        console.log('Entering password...')
    }


    render(){
        return (
            <input type="password" onKeyUp={(e)=>this.handleKeyUp(e)} />
        )
    }
}
