import React, { Component } from 'react'
import MethodAsPropsAsChild from './MethodAsPropsAsChild'

 class MethodAsPropsAsParent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              greet:'Welcome Parent'
         }
         this.greetParentHandler = this.greetParentHandler.bind(this)
     }
     greetParentHandler(childName){
         alert(`Hello ${this.state.greet} from ${childName}`)
     }
     
    render() {
        return (
            <div>
                <MethodAsPropsAsChild nameOfProps={this.greetParentHandler} />
            </div>
        )
    }
}

export default MethodAsPropsAsParent;