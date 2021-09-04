import React from "react";
import style from "./index.module.scss"

const HomeBanner = () => {
  return (
    <div className={style.banner}>
      <h1 className={style.title}>
        <span>
          <strong>Oxigênio para sua clínica?</strong>
          Entregamos em todo o estado.
        </span>
      </h1>
      <div className={style.containerText}></div>
      <img className={style.image} src="banner1.png" />

      <a className={style.button}>
        <img src="logo-whats.svg" />
      </a>
    </div>
  )
}

export default HomeBanner