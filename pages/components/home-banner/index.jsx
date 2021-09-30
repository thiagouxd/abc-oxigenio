/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react"
import style from "./index.module.scss"
import { ChevronsRight, ChevronsLeft, ArrowRight, ArrowLeft } from "react-feather"

const HomeBanner = ({ phone }) => {
  const [carrossel, setCarrossel] = useState()
  const [carrosselSize, setCarrosselSize] = useState("")
  var interval;

  useEffect(() => {
    const element = document.getElementById("carrossel");
    setCarrossel(element)
    setCarrosselSize(element.offsetWidth)
    interval = setInterval(() => { changeBannersAuto(element) }, 7000)
  }, [])

  const changeBannersAuto = (element) => {
    console.log(element.scrollLeft === element.offsetWidth)
    if (element.scrollLeft === element.offsetWidth) {
      scrollToLeftAuto(element)
    } else {
      scrollToRightAuto(element)
    }
  }

  const scrollToRightAuto = (element) => {
    element.scrollLeft = element.offsetWidth
  }

  const scrollToLeftAuto = (element) => {
    element.scrollLeft = - element.offsetWidth
  }

  const scrollToRight = () => {
    clearInterval(interval);
    carrossel.scrollLeft = carrosselSize
  }

  const scrollToLeft = () => {
    clearInterval(interval);
    carrossel.scrollLeft = - carrosselSize
  }

  return (
    <div className={style.containerCarrossel}>
      <div id="carrossel" className={style.carrossel}>
        <div className={style.banner}>
          <h1 className={style.title}>
            <span>
              <strong>Oxigênio para sua clínica?</strong> <br />
              Entregamos em todo o estado.
            </span>
          </h1>
          <div className={style.containerText}></div>
          <img className={style.image} src="banner1.png" />


        </div>
        <div className={style.banner}>
          <h1 className={`${style.title} ${style.titleSecondary}`}>
            <span>
              <strong>Serviço de Home care
                para concentradores de ar. </strong>
              Nós levamos até você.
            </span>
          </h1>
          <div className={`${style.containerText} ${style.containerTextSecondary}`}></div>
          <img className={style.image} src="banner3.png" />
        </div>
      </div>
      <a target="_blank" rel="noopener noreferrer"
        href={`https://api.whatsapp.com/send?phone=+55${phone}`}
        className={style.button}>
        <img src="logo-whats.svg" />
      </a>

      <div className={style.buttons}>
        <button onClick={scrollToLeft}>
          <ArrowLeft />
        </button>
        <button onClick={scrollToRight}>
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default HomeBanner