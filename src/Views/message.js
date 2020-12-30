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
              Colegas,
            </p>
            <p>
              Estamos colocando nossa calculadora TO.CA. na PlayStore!<br></br>Logo será possível fazer os cálculos em seu smartfone, sem necessidade de conexão com a internet.
           </p>
            <p>
              Enquanto isso fiquem à vontade para compartilhá-la em suas redes!
            </p>
            <p>
              Muito obrigado,
              André Paiva ;)
            </p>

            
          </article>
          
          <div className="fb-share-button" data-href="http://www.ensaios3d.com/apps" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.ensaios3d.com%2Fapps&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Compartilhar</a></div>

          <button id="Whatsapp" onClick={()=>window.open("https://api.whatsapp.com/send?text=http://www.ensaios3d.com/apps")} style={{width:135+'px', borderRadius: 5}}>
          <small>Compartilhe via Whatsapp</small></button>

          <Link id="Whatsapp" to="/apps/calculadora_de_taxa_de_ocupacao/">
            Voltar para Calculadora
          </Link>



      </div>
    </div>
    </>
  )
}