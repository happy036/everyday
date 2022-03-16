import React from 'react'

function TextTwo(props) {
    return (
        <div>{props.children}</div>
    )
}
TextTwo.defaultProps = {
    msg: 'ccc'
}
export default TextTwo