import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import style from "./index.module.scss"

const products = [
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
  { name: "Kit Oxigênio", img: "gases.png" },
]

const valueToScroll = 344

const Products = () => {
  const [productList, setProductList] = useState()

  useEffect(() => {
    const element = document.getElementById("product-list");

    setProductList(element)
  })


  const scrollRight = () => {
    productList.scrollLeft = productList.scrollLeft + valueToScroll
  }

  const scrollLeft = () => {
    productList.scrollLeft = productList.scrollLeft - valueToScroll
  }

  return (
    <section className={style.container} id="produtos">
      <h2 className={style.title}>Gases medicinais</h2>
      <hr className={style.divider} />

      <div className={style.containerList}>
        <button onClick={scrollLeft}
          className={style.controlButton}>
          <img src="arrow-left.svg" />
        </button>

        <button
          onClick={scrollRight}
          className={`${style.controlButton} ${style.right}`}>
          <img src="arrow-right.svg" />
        </button>

        <ul id="product-list" className={style.productList}>
          {products.map((item, index) => <Item key={index} item={item} />)}
        </ul>
      </div>
    </section>
  )
}

const Item = ({ item }) => {
  return (
    <li className={style.product}>
      <div className={style.imageContainer}>
        <img className={style.productImage} src={item.img} />
      </div>

      <div className={style.textContainer}>
        <h3 className={style.productName}>{item.name}</h3>
        <a className={style.buyButton}>
          Comprar agora
        </a>
      </div>
    </li>
  )
}

export default Products