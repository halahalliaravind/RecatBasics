import React, { Component } from 'react'

export default class eventClass extends Component {
    changeBtn(){
        console.log('btnChanged');
    }
    render() {
        
        return (
            <div>
                <button onClick={this.changeBtn}>BtnChange</button>
            </div>
        )
    }
}
