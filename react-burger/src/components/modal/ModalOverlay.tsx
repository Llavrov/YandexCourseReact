import React, {Dispatch, FC, SetStateAction} from 'react';
import ModalStyle from './ModalItem.module.css';

interface StandardComponentProps {
    onClose: (point: boolean) => Dispatch<SetStateAction<boolean>>
    children: React.ReactNode
}

function ModalOverlay({children, onClose}: StandardComponentProps) {
    return (
        <div onClick={() => onClose(true)} className={ModalStyle.modalOverlay}>
            {children}
        </div>
    );
}


export default ModalOverlay;