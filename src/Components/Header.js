import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

export default function Header (){

  var notification;
  localStorage.getItem('msg')==="read" ? notification = null : notification = <div className="number">1</div>;

  return(<>
  <div className="header">
    <div className="headerContent">
      <Link className="aBtn" to="/apps/calculadora_de_taxa_de_ocupacao/whatisto">O que é T.O.</Link>
      <Link className="aBtn" to="/apps/calculadora_de_taxa_de_ocupacao/whatisca">O que é C.A.</Link>
      <Link className="aBtn" to="/apps/calculadora_de_taxa_de_ocupacao/areaperm">O que é Área Permeável</Link>
      <Link className="aBtn" to="/apps/calculadora_de_taxa_de_ocupacao/help">ajuda</Link>
    </div>
  </div>
  <div className="miniHeader">
    <div className="headerContent">
      <a className="aBtn" onClick={()=>openMenu()}>menu</a>
    </div>
  </div>
  <div id="menu">
    <ul>
        <li><Link className="aBtn" to="/apps/calculadora_de_taxa_de_ocupacao/whatisto">O que é T.O.</Link></li>
        <li><Link className="aBtn" to="/apps/calculadora_de_taxa_de_ocupacao/whatisca">O que é C.A.</Link></li>
        <li><Link className="aBtn" to="/apps/calculadora_de_taxa_de_ocupacao/areaperm">O que é Área Permeável</Link></li>
        <li><Link className="aBtn" to="/apps/calculadora_de_taxa_de_ocupacao/help">ajuda</Link></li>
    </ul>
  </div>
  <div id="clickToCloseMenu" onClick={()=>hideMenu()}></div>

  
  
  </>);
}

function openMenu(){
  if (document.querySelector("#menu").style.height=="250px"){
    document.querySelector("#menu").style.height="0px";
    document.querySelector("#clickToCloseMenu").style.height="0vh";
  }
  else{
    document.querySelector("#menu").style.height="250px";
    document.querySelector("#clickToCloseMenu").style.height="80vh";
  }
}
function hideMenu(){
    document.querySelector("#menu").style.height="0px";
    document.querySelector("#clickToCloseMenu").style.height="0vh";
}
window.addEventListener("resize", hideMenu);