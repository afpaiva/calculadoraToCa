import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import '../style.css';

export default function WhatIsCA (){

  return (
    <>
    <Header />
    <div className="container">
      <div className="articleContainer">

          <h1>O que é Coeficiente de Aproveitamento?</h1>
          <article>
            <p>
              Quando vamos aprovar algum projeto na Prefeitura, precisamos demonstrar alguns números, entre eles o <i>Coeficiente de Aproveitamento</i>.
            </p>
            <p>
              O <i>Coeficiente de Aproveitamento</i> é a representação numérica, que define a razão entre a área Total Construída (incluindo todos os pavimentos) em relação à Área do Terreno. O número demonstra o quanto foi aproveitado sobre o terreno. O valor de 1 equivale a um aproveitamento igual a área do terreno, já 0,5 equivale a um aproveitamento referente à metade da área do terreno. São números importantes para controle de densidade urbana.
            </p>
            <p>
              O cálculo do <i>Coeficiente de Aproveitamento</i> é bastante simples, e utilizamos a seguinte fórmula:
            </p>
            <div className="bash">
              C.A. = Área Total a Construir / Área do Terreno
            </div>
            <p>
              Sendo assim, um terreno de 500m² com uma área total construída de 200m² terá um C.A. de 0,4. Se as normas de assentamento permitirem que se construa com até 0,8 de C.A. neste loteamento, logo, neste quesito, o projeto estará de acordo com as regras.
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