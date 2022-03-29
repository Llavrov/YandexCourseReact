import React from "react";
import ReactDOM from "react-dom";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyle from './ModalItem.module.css';
import ModalOverlay from "./ModalOverlay";

function Modal({...props}) {
    const modalRoot = document.getElementById('reactModal');

    React.useEffect(() => {
        const Escape = (event) => {if (event.key === 'Escape') props.onClose(true)}
        document.addEventListener('keydown', Escape);

        return () => document.removeEventListener('keydown', Escape);
    }, []);

    return ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>
            <div onClick={(e) => {e.stopPropagation()}}
                 className={ModalStyle.contentBox}>
                <div onClick={() => props.onClose(true)} className={`${ModalStyle.closeBtn} mr-10 mt-15`}>
                    <CloseIcon type="primary"/>
                </div>
                <div className={ModalStyle.container}>
                    <p className={`${props.classModal} text text_type_main-large`}>{props.header}</p>
                    {props.children}
                </div>
            </div>
        </ModalOverlay>,
        modalRoot
    );
}
// style={{position: 'absolute', right: 0}}
// style={{minWidth: '315px', width: '720px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
export default Modal;