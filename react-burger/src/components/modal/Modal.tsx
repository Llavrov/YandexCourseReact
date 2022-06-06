import React from "react";
import ReactDOM from "react-dom";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyle from './ModalItem.module.css';
import ModalOverlay from "./ModalOverlay";
import PropTypes from "prop-types";

function Modal({...props}) {
    const modalRoot = document.getElementById('reactModal') || document.createElement('div#reactModal');

    React.useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {if (event.key === 'Escape') props.onClose()}
        document.addEventListener('keydown', handleEscapeKey);

        return () => document.removeEventListener('keydown', (event) => handleEscapeKey(event));
    }, []);

    return ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>
            <div onClick={(e) => {e.stopPropagation()}}
                 className={ModalStyle.contentBox}>
                <div onClick={props.onClose} className={`${ModalStyle.closeBtn} mr-10 mt-15`}>
                    <CloseIcon type="primary"/>
                </div>
                <div className={ModalStyle.container}>
                    <div className={`${ModalStyle.header} ${props.classModal} pl-10`}>
                        <p className={`text text_type_main-large`}>{props.header}</p>
                    </div>
                    {props.children}
                </div>
            </div>
        </ModalOverlay>,
        modalRoot
    );
}
Modal.propTypes = {
    children: PropTypes.object.isRequired,
    header: PropTypes.string,
    classModal: PropTypes.string,
    onClose: PropTypes.func,
};

export default Modal;