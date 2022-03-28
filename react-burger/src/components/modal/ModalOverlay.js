import React from 'react';
import ReactDOM from "react-dom";


function ModalOverlay({...props}){
    const modalRoot = document.getElementById('reactModal');
    return ReactDOM.createPortal(
        <div onClick={() => props.onClose(true)} style={{background: 'rgba(0, 0, 0, 0.6)', width: '100vw', height:'100vh'}}>
            {props.children}
        </div>,
        modalRoot
    );
}

export default ModalOverlay;