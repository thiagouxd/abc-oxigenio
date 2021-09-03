import React from "react";

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
    <section id="produtos">
      <h2>Gases medicinais</h2>
      <hr />
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