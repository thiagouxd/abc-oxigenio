/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import style from "./index.module.scss";
import {
  ChevronsRight,
  ChevronsLeft,
  ArrowRight,
  ArrowLeft,
} from "react-feather";

const HomeBanner = ({ phone }) => {
  const [carrossel, setCarrossel] = useState();
  const [carrosselSize, setCarrosselSize] = useState("");
  var interval;

  useEffect(() => {
    const element = document.getElementById("carrossel");
    setCarrossel(element);
    setCarrosselSize(element.offsetWidth);
  }, []);

  const scrollToRight = () => {
    carrossel.scrollLeft = carrossel.scrollLeft + carrosselSize;
    clearInterval(interval);
  };

  const scrollToLeft = () => {
    carrossel.scrollLeft = carrossel.scrollLeft - carrosselSize;
    clearInterval(interval);
  };

  return (
    <div className={style.containerCarrossel}>
      <div id="carrossel" className={style.carrossel}>
        <div
          style={{ cursor: "pointer" }}
          className={style.banner}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdWgrxc8JGZp5GQwZCPjmb6_AXJlqk9jrrAUkv7XUBNaFCF-Q/viewform"
            )
          }
        >
          <h1 className={style.title}>
            <span>
              <strong>
                Você está <br />
                Satisfeito(a) <br />
                com nosso <br />
                atendimento?
              </strong>
            </span>
          </h1>
          <div className={style.containerText}></div>
          <img className={style.image} src="banner4.png" />
        </div>
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
              <strong>Serviço de Home care para concentradores de ar. </strong>
              Nós levamos até você.
            </span>
          </h1>
          <div
            className={`${style.containerText} ${style.containerTextSecondary}`}
          ></div>
          <img className={style.image} src="banner3.png" />
        </div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://api.whatsapp.com/send?phone=+55${phone}`}
        className={style.button}
      >
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
  );
};

export default HomeBanner;
