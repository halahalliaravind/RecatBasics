import React from 'react'

function MethodAsPropsAsChild(props) {
    return (
        <div>
            {/* <button onClick={props.nameOfProps}>Greet Parent</button> */}
            <button onClick={()=>props.nameOfProps('childComponent')}>Greet Parent</button>
        </div>
    )
}

export default MethodAsPropsAsChild
