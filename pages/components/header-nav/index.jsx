import React, { useEffect, useState } from "react"
import Menu from "./menu"
import Modal from "./modal"
import style from "./index.module.scss"
import { Menu as MenuIcon, X } from "react-feather"

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const close = () => {
    setIsOpen(false)
  }

  const open = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.pageYOffset === 0 ? setIsScrolling(false) : setIsScrolling(true)
    })
  })

  return (
    <header className={`${style.header} ${isScrolling && style.headerScrollMode}`}>
      <nav className={style.nav}>
        <a className={style.logo} href="#home">
          <img src="logo.svg" />
        </a>

        <Menu />

        <button className={style.hamburgerButton} onClick={open}>
          <MenuIcon />
        </button>

        <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
          <Menu isOpen={isOpen} />
          <button className={style.closeButton} onClick={close}>
            <X />
          </button>
        </Modal>
      </nav>
    </header >
  )
}

export default NavHeader;