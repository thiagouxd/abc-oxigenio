import React from "react"
import style from "./index.module.scss"

const HomeBanner = ({ phone }) => {
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

      <a target="_blank" rel="noopener noreferrer"
        href={`https://api.whatsapp.com/send?phone=+55${phone}`}
        className={style.button}>
        <img src="logo-whats.svg" />
      </a>
    </div>
  )
}

export default HomeBanner