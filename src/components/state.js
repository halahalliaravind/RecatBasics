import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Welcome to the User"
        }
    }

    changeMessage(){
        this.setState({
            message:"Thanks for Subscribing us"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
