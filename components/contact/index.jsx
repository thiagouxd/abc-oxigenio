import React from "react";
import style from "./index.module.scss"

const map = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14947.176957644113!2d-54.5669117!3d-20.5146595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa628a00ab3cc37a2!2sABC%20Oxig%C3%AAnio!5e0!3m2!1spt-BR!2sbr!4v1630698529860!5m2!1spt-BR!2sbr"

const mapLink = "https://www.google.com/maps/place/ABC+Oxig%C3%AAnio/@-20.514659,-54.566912,15z/data=!4m5!3m4!1s0x0:0xa628a00ab3cc37a2!8m2!3d-20.5146241!4d-54.566923?hl=pt-BR"

const Contact = ({ phone }) => {
  return (
    <section className={style.container} id="contato">
      <div className={style.phones}>
        <a className={style.button} target="_blank" rel="noopener noreferrer"
          href={`https://api.whatsapp.com/send?phone=+55${phone}`}>
          <img src="logo-whats-color.svg" />
          {phone}
        </a>

        <a className={`${style.button} ${style.buttonSecondary}`} target="_blank" rel="noopener noreferrer"
          href={`tel:+556733551020`}>
          <img src="phone.svg" />
          67 3355-1020
        </a>
      </div>

      <div className={style.socialMedias}>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/abcoxigenio/">
          <img src="./instagram.svg" alt="" />
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/abcoxigenio">
          <img src="./facebook.svg" alt="" />
        </a>
      </div>

      <a href={mapLink} target="_blank" rel="noopener noreferrer" className={style.address}>
        Av. Guaicurus, 1097 - Jardim Itamaraca, Campo Grande / MS, 79062-292
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