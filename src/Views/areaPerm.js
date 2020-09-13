import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import '../style.css';

export default function AreaPerm (){

  return (
    <>
    <Header />
    <div className="container">
      <div className="articleContainer">

          <h1>O que é Área Permeável?</h1>
          <article>
            <p>
              Respeitar a <i>Área Permeável</i> exigida pelos órgãos de Planejamento Urbano é extremamente importante para a cidade. A <i>Área Permeável</i> é a porção do terreno que não receberá pisos permeáveis. São utilizados canteiros, seixos, pedriscos, pisos drenantes, e na maioria das vezes são espaços com tratamento paisagístico. Além de diversos benefícios ambientais, muitas enchentes podem ser evitadas se todos respeitarem este número.
            </p>
            <p>
              A <i>Área Permeável</i> é a representação numérica em porcentagem do total das áreas permeáveis de um projeto, dividido pela área do terreno.
            </p>
            <p>
              O cálculo da <i>Área Permeável</i> é bastante simples, e utilizamos a seguinte fórmula:
            </p>
            <div className="bash">
              A.P. = (Área Total Permeável * 100) / Área do Terreno
            </div>
            <p>
              Sendo assim, um terreno de 500m² com uma área permeável total de 200m² terá 40% de permeabilidade. Se as normas de assentamento permitirem que se obtenha no mínimo 35% de permeabilidade neste loteamento, logo, neste quesito, o projeto estará de acordo com as regras.
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