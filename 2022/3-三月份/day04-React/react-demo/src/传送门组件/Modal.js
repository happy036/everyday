import React from 'react'
import ReactDOM from 'react-dom'
function Modal() {
    return ReactDOM.createPortal(
        <div style={{ width: '100%', height: '100%', position: 'fixed', left: 0, top: 0, background: "rgba(0,0,0,0.5)" }}>
            <div style={{ width: 400, height: 400, background: '#fff', position: 'absolute', left: '50%', top: '50%', marginLeft: -200, marginTop: -200 }}>Modal</div>
        </div>,
        document.getElementById('root1')
    )
}

export default Modal