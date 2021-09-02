import React from "react"
import style from "./modal.module.scss"

const Modal = ({ setIsOpen, isOpen, children }) => {

  return (
    <div onClick={() => setIsOpen(false)
    } className={`${style.overlay} ${isOpen && style.aberto}`}>
      <div className={style.modal}>
        {children}
      </div>
    </div >
  )
}

export default Modal
