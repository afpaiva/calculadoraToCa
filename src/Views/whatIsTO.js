import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import '../style.css';

export default function WhatIsTO (){

  return (
    <>
    <Header />
    <div className="container">
      <div className="articleContainer">

          <h1>O que é Taxa de Ocupação?</h1>
          <article>
            <p>
            Quando vamos aprovar algum projeto na Prefeitura, precisamos demonstrar alguns números, entre eles a <i>Taxa de Ocupação</i>.
            </p>
            <p>
            A <i>Taxa de Ocupação</i> é a representação numérica em percentagem, que define a projeção das áreas construídas em relação à área do terreno. Essa projeção é também conhecida como "Área de Sombra" por alguns profissionais. Através deste valor as Prefeituras conseguem regular a densidade urbana. Por isso da importância de se respeitar as regras de ocupação dos Planos Diretores de sua cidade.
            </p>
            <p>
            O cálculo da <i>Taxa de Ocupação</i> é bastante simples, e utilizamos a seguinte fórmula:
            </p>
            <div className="bash">
            T.O. = (Área de Projeção x 100 ) / Área do Terreno
            </div>
            <p>
            Sendo assim, um terreno de 500m² com uma área de sombra de 200m² terá uma T.O. de 40%. Se as normas de assentamento permitirem que se construa com até 50% de T.O. neste loteamento, logo, neste quesito, o projeto estará de acordo com as regras.
            </p>
          </article>
          
          <div className="fb-share-button" data-href="http://www.ensaios3d.com/apps" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.ensaios3d.com%2Fapps&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Compartilhar</a></div>
          

          <Link id="Whatsapp" to="/">
            Voltar para Calculadora
          </Link>

      </div>
    </div>
    </>
  )
}