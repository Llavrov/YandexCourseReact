import React from 'react';
import ModalStyle from './ModalItem.module.css';
import PropTypes from "prop-types";

function ModalOverlay({...props}){
    return (
        <div onClick={() => props.onClose(true)} className={ModalStyle.modalOverlay}>
            {props.children}
        </div>
    );
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.object,
}

export default ModalOverlay;