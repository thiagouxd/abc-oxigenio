import React, { useState } from "react"
import Menu from "./menu"
import Modal from "./modal"
import style from "./index.module.scss"

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
  }

  const open = () => {
    setIsOpen(true)
  }

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a className={style.logo} href="#home">
          <img src="logo.svg" />
        </a>

        <Menu />

        <button className={style.botaoHamburger} onClick={open}>=</button>

        <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
          <Menu isOpen={isOpen} />
          <button className={style.botaoFechar} onClick={close}>X</button>
        </Modal>
      </nav>

    </header >
  )
}

export default NavHeader;