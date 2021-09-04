import React from "react";
import style from "./index.module.scss"

const lista = [
  { title: "kit Oxigênio", img: "imagem" },
  { title: "kit Oxigênio", img: "imagem" },
  { title: "kit Oxigênio", img: "imagem" },
  { title: "kit Oxigênio", img: "imagem" },
  { title: "kit Oxigênio", img: "imagem" },
  { title: "kit Oxigênio", img: "imagem" },
]

const Products = () => {
  return (
    <section className={style.container} id="produtos">
      <h2 className={style.title}>Gases medicinais</h2>
      <hr className={style.divider} />
      <ul>
        {lista.map((item, index) => <Item item={item} index={index} />)}
      </ul>
    </section>
  )
}

const Item = ({ item, index }) => {
  return (
    <li key={index}>
      {item.title}
    </li>
  )
}

export default Products