import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Message (){

  return (
    <>
    <Header />
    <div className="container">
      <div className="articleContainer">

          <h1>Mensagem:</h1>
          <article>
            <p>
              Caros visitantes,
            </p>
            <p>
              Gostaria de agradecer pela confiança depositada na aplicação que desenvolvi. É muito gratificante checar as estatísticas e ver que um produto está sendo útil no dia a dia de outras pessoas.
            </p>
            <p>
              Fiquem à vontade para compartilhá-la em suas redes!
            </p>
            <p>
              Muito obrigado,
              André Paiva ;)
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