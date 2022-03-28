import React from "react";
import ReactDOM from "react-dom";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyle from './ModalItem.module.css';

function Modal({...props}) {
    const modalRoot = document.getElementById('reactModal');
    React.useEffect(() => {
        document.addEventListener('keydown', function(event) {
            if (event.key == 'Escape') props.onClose(true)
        });

        return document.removeEventListener('keydown', function(event) {
            if (event.key == 'Escape') props.onClose(true)
        });
    });
    return ReactDOM.createPortal(
        <div onClick={(e) => {e.stopPropagation()}} style={{position: 'absolute', background: 'rgba(28, 28, 33, 1)', borderRadius: '40px'}}>
            <div onClick={() => props.onClose(true)} className={`${ModalStyle.closeBtn} mr-10 mt-15`}>
                <CloseIcon type="primary"/>
            </div>
            <div className={ModalStyle.container}>
                <p className={`${props.classModal} text text_type_main-large`}>{props.header}</p>
                {props.children}
            </div>
        </div>,
        modalRoot
    );
}
// style={{position: 'absolute', right: 0}}
// style={{minWidth: '315px', width: '720px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
export default Modal;