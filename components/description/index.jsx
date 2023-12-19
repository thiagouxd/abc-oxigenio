import React, { useState } from "react";
import style from "./index.module.scss";

const text = (
  <>
    Há 22 anos no mercado, referência quando o assunto é comercialização de
    gases medicinais e industriais, pela qualidade, e acima de tudo, segurança
    na manipulação dos produtos.
    <br />
    <br />
    A ABC Oxigênio trabalha com gases já envasados como óxido nitroso,
    acetileno, hélio, nitrogênio, mistura para solda, argônio, ar comprimido
    medicinal, ar sintético, além de oferecer tanques criogênicos de gases para
    o envase dos gases oxigênio e dióxido de carbono.
    <br />
    <br />
    Os cilindros de oxigênio são envasados e analisados por equipamentos
    aprovados pela Anvisa (Agência Nacional de Vigilância Sanitária) bem como
    todo o processo de transformação do oxigênio medicinal líquido em gasoso é
    acompanhado, analisado e conferido por profissional farmacêutico, oferecendo
    qualidade e confiança do produto.
  </>
);

const Description = () => {
  return (
    <section className={style.container} id="sobre">
      <img
        className={style.image}
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSdWgrxc8JGZp5GQwZCPjmb6_AXJlqk9jrrAUkv7XUBNaFCF-Q/viewform"
          )
        }
        src="banner.png"
      />

      <h2 className={style.title}>Oxigênio é vida</h2>
      <p className={style.paragraphy}>{text}</p>
    </section>
  );
};

export default Description;
