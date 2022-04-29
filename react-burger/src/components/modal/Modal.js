import React from "react";
import ReactDOM from "react-dom";
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyle from './ModalItem.module.css';
import ModalOverlay from "./ModalOverlay";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {DELETE_INGREDIENT_ITEM} from "../../redux/actions/ingredient";
import {SET_ORDER_CLOSE} from "../../redux/actions/order";

function Modal({...props}) {
    const modalRoot = document.getElementById('reactModal');
    const dispatch = useDispatch()

    function handleCloseModal() {
        dispatch({type: DELETE_INGREDIENT_ITEM});
        dispatch({type: SET_ORDER_CLOSE});
    }

    React.useEffect(() => {
        const handleEscapeKey = (event) => {if (event.key === 'Escape') handleCloseModal()}
        document.addEventListener('keydown', handleEscapeKey);

        return () => document.removeEventListener('keydown', handleEscapeKey);
    }, []);

    return ReactDOM.createPortal(
        <ModalOverlay onClose={handleCloseModal}>
            <div onClick={(e) => {e.stopPropagation()}}
                 className={ModalStyle.contentBox}>
                <div onClick={handleCloseModal} className={`${ModalStyle.closeBtn} mr-10 mt-15`}>
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
};

export default Modal;