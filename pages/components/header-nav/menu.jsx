import React from "react"
import style from "./menu.module.scss"

export const Menu = ({ isOpen }) => (
  <ul className={`${style.menu} ${isOpen && style.menuModal}`}>
    {menuItem.map((item, index) =>
      <li key={index}>
        <a className={style.link} href={item.link}>{item.label}</a>
      </li>
    )}
  </ul>
)

export default Menu

const menuItem = [
  {
    label: "Home",
    link: "#home"
  },
  {
    label: "Produtos",
    link: "#produtos"
  },
  {
    label: "Sobre",
    link: "#sobre"
  },
  {
    label: "Contato",
    link: "#contato"
  },
]