import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello, User'
        }
        // Approach three
        // this.clickHandler = this.clickHandler.bind(this);
    }
    //method 1, 2,3,
    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })
    //     console.log(this)
    // }

    // Method 4
    clickHandler = () =>{
        this.setState({
            message:'Good Bye!!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* Approach 0ne */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Approch two */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                {/* Approach three and more prefrable */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                {/* Approach four and most prefrable */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
