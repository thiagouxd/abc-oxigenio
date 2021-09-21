import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import style from "./index.module.scss"

const products = [
  { name: "Oxigênio", img: "produtos/oxigênio.jpg" },
  { name: "Hidrogênio", img: "produtos/hidrogênio.jpg" },
  { name: "Nitrogênio", img: "produtos/nitrogênio.jpg" },
  { name: "Argônio", img: "produtos/argonio.jpg" },
  { name: "Hélio", img: "produtos/hélio.jpg" },
  { name: "Acetileno", img: "produtos/acetileno.jpg" },
  { name: "Dióxido de Carbono", img: "produtos/dióxido-de-carbono.jpg" },
  { name: "Concentrador de oxigênio", img: "produtos/concentrador.jpg" },
  { name: "Regulador Medicinal", img: "produtos/regulador.jpg" },
]

const text = (produto) => `
  Olá! Vim por meio do seu site.
  O produto que estou interessado é o ${produto}
`

const valueToScroll = 344

const Products = ({ phone }) => {
  const [productList, setProductList] = useState()

  useEffect(() => {
    const element = document.getElementById("product-list");
    setProductList(element)
  }, [])


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
          {products.map((item, index) => <Item phone={phone} key={index} item={item} />)}
        </ul>
      </div>
    </section>
  )
}

const Item = ({ item, phone }) => {
  return (
    <li className={style.product}>
      <div className={style.imageContainer}>
        <img className={style.productImage} src={item.img} />
      </div>

      <div className={style.textContainer}>
        <h3 className={style.productName}>{item.name}</h3>
        <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${text(item.name)}`}
          className={style.buyButton}>
          Comprar agora
        </a>
      </div>
    </li>
  )
}

export default Products