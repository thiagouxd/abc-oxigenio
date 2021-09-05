import React from "react";
import style from "./index.module.scss"

const products = [
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
        {products.map((item, index) => <Item key={index} item={item} />)}
      </ul>
    </section>
  )
}

const Item = ({ item }) => {
  return (
    <li>
      {item.title}
    </li>
  )
}

export default Products