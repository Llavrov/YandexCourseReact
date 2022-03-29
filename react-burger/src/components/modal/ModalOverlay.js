import React from 'react';
import ModalStyle from './ModalItem.module.css';

function ModalOverlay({...props}){
    return (
        <div onClick={() => props.onClose(true)} className={ModalStyle.modalOverlay}>
            {props.children}
        </div>
    );
}

export default ModalOverlay;