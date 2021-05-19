
import { useEffect, memo } from 'react';
import { createPortal } from 'react-dom';



import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')


const Modal = ({ children, onClose }) => {

useEffect(() => {
    window.addEventListener('keydown', function (e) {
         if (e.code === "Escape") {
            onClose()
        }
    })
    return window.removeEventListener('keydown', function (e) {
        if (e.currentTarget === e.target) {
      onClose();
    }
    })
    
}, [])

    const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };



     return createPortal(
            <div className={styles.overlay} onClick={handleBackdropClick}>
                <div className={ styles.modal}>{children}</div>
            </div>,
            modalRoot
        )

    
}

export default memo(Modal)
