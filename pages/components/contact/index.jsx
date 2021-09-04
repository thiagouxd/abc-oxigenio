import React from "react";
import style from "./index.module.scss"

const map = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14947.176957644113!2d-54.5669117!3d-20.5146595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa628a00ab3cc37a2!2sABC%20Oxig%C3%AAnio!5e0!3m2!1spt-BR!2sbr!4v1630698529860!5m2!1spt-BR!2sbr"

const mapLink = "https://www.google.com/maps/place/ABC+Oxig%C3%AAnio/@-20.514659,-54.566912,15z/data=!4m5!3m4!1s0x0:0xa628a00ab3cc37a2!8m2!3d-20.5146241!4d-54.566923?hl=pt-BR"

const tel = "(67) 99982-5971"

const Contact = () => {
  return (
    <section className={style.container} id="contato">
      <a className={style.button} target="_blank"
        href={`https://api.whatsapp.com/send?phone=${tel}`}>
        <img src="logo-whats.svg" />
        {tel}
      </a>

      <a href={mapLink} target="_blank" className={style.address}>
        Av. Guacurus, 1097 - Jardim Itamaraca, Campo Grande / MS, 79062-292
      </a>

      <iframe src={map}
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy">
      </iframe>
    </section>
  )
}

export default Contact