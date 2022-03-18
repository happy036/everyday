import { forwardRef } from 'react'

function Message(props, ref) {
    return (
        <div ref={ref}>Message</div>
    )
}

export default forwardRef(Message)