import React from "react";
import ReactDOM from "react-dom";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyle from './ModalItem.module.css';
import ModalOverlay from "./ModalOverlay";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {DELETE_INGREDIENT_ITEM} from "../../redux/actions/ingredient";

function Modal({...props}) {
    const modalRoot = document.getElementById('reactModal');
    const dispatch = useDispatch()

    React.useEffect(() => {
        const handleEscapeKey = (event) => {if (event.key === 'Escape') dispatch({type: DELETE_INGREDIENT_ITEM})}
        document.addEventListener('keydown', handleEscapeKey);

        return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [props.onClose]);

    return ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>
            <div onClick={(e) => {e.stopPropagation()}}
                 className={ModalStyle.contentBox}>
                <div onClick={() => dispatch({type: DELETE_INGREDIENT_ITEM})} className={`${ModalStyle.closeBtn} mr-10 mt-15`}>
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
    onClose: PropTypes.func.isRequired,
    header: PropTypes.string,
    classModal: PropTypes.string,
};

export default Modal;