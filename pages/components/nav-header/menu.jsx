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
    label: "Sobre nós",
    link: "#sobre"
  },
  {
    label: "Gases hospitalares",
    link: "#hospitalares"
  },
  {
    label: "Gases industriais",
    link: "#industriais"
  },
  {
    label: "Concentradores",
    link: "#concentradores"
  },
  {
    label: "Contato",
    link: "#contato"
  },
]