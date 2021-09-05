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

const phone = '(67) 989898989'
const text = (produto) => `
  Olá! Vim por meio do Site.
  O produto é o ${produto}
`

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
        <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${text(item.name)}`}
          className={style.buyButton}>
          Comprar agora
        </a>
      </div>
    </li>
  )
}

// https://api.whatsapp.com/send?phone=5567999785232&text=%F0%9F%91%8B%20Ol%C3%A1%2C%20venho%20de%20https%3A%2F%2Fsaloonhamburgueria.ola.click%0A%0A*BR-5827629619*%0A%F0%9F%97%93%EF%B8%8F%2005%2F09%2F2021%20%E2%8F%B0%2005%3A26%20pm%0A%0A*Tipo%20de%20servi%C3%A7o%3A%20Retirar%20na%20loja*%0A%0ANome%3A%20Thiago%20%0ATelefone%3A%2067996547312%0A%0AM%C3%A9todo%20de%20pagamento%20solicitado%3A%20*Cart%C3%A3o*%0A%0A*%F0%9F%92%B2%20Custos*%0APre%C3%A7o%20dos%20produtos%3A%20R%24%2029%2C00%0APre%C3%A7o%20de%20embalagem%3A%20R%24%200%2C00%0A*Total%20a%20pagar%3A%20R%24%2029%2C00%20incluindo%20impostos*%0A%0A*%F0%9F%93%9D%20Pedido*%0A%0A%E2%96%AA%20*x1%20Hamburguer%20R%24%2029%2C00*%0A%20%20Pre%C3%A7o%20unit%C3%A1rio%20R%24%2016%2C00%0A%20%20%2B1%20Hamburguer%20(%2B%20R%24%2013%2C00)%0A%20%20%20%201%20Ao%20ponto%0A%0A*Coment%C3%A1rios%20adicionais%3A*%0A_asdfasdf%20asdf%20asdf%20asdf%20asdf%20asfa%20sdf_%0A%0A%F0%9F%91%86%20Ap%C3%B3s%20enviar%20o%20pedido%2C%20aguarde%20que%20j%C3%A1%20iremos%20lhe%20atender..

export default Products