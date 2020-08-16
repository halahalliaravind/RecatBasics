import React, { Component } from 'react'

export default class classComp extends Component {
    render() {
        const{fname,lname} = this.props;
        return (
            <div>
                <h1>Hey {fname} {lname} How are You?</h1>
            </div>
        )
    }
}
