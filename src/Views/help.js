import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import '../style.css';


export default function Help (){

  return (
    <>
    <Header />
    <div className="container">
      <div className="articleContainer">

          <h1>Precisa de ajuda?</h1>
          <article>
            <p>
              Desenvolvemos esta calculadora para facilitar o seu trabalho! Veja como é simples utilizá-la.
            </p>
            <p>
              Na tela inicial, basta entrar com os valores nos campos em branco e a calculadora apresenta os resultados em tempo real na tabela logo abaixo. Se precisar adicionar ou remover pavimentos acima ou abaixo, clique nos botões <i>+</i> e <i>-</i> (pavimento acima) ou  <i>+</i> e <i>-</i> (pavimento abaixo).
            </p>
            <p>
              Feitos os cálculos, você pode enviá-los para você mesmo, ou para outra pessoa clicando em <i>"Enviar Resultados Via Whatsapp"</i>.
            </p>
            <p>
              Caso tenha alguma dúvida, ou alguma sugestão de implementação, ou reportar algum erro, será um prazer receber sua mensagem:
            </p>
            <p>
                <a href="mailto:contato@ensaios3d.com">contato@ensaios3d.com</a>
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