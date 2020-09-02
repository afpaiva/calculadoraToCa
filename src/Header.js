import React from 'react';
import './style.css';

export default function Header (){
  return(<>
  <div className="header">
    <div className="headerContent">
      <a href="">O que é T.O.</a>
      <a href="">O que é C.A.</a>
      <a href="">O que é Área Permeável</a>
      <a href="">ajuda</a>
      <a href="">contato</a>
    </div>
  </div>
  <div className="miniHeader">
    <div className="headerContent">
      <a onClick={()=>openMenu()}>menu</a>
    </div>
  </div>
  <div id="menu">
    <ul>
        <li><a href="">O que é T.O.</a></li>
        <li><a href="">O que é C.A.</a></li>
        <li><a href="">O que é Área Permeável</a></li>
        <li><a href="">ajuda</a></li>
        <li><a href="">contato</a></li>
    </ul>
  </div>
  </>);
}

function openMenu(){
  if (document.querySelector("#menu").style.height=="250px")
    document.querySelector("#menu").style.height="0px";
  else
    document.querySelector("#menu").style.height="250px";
}
function hideMenu(){
    document.querySelector("#menu").style.height="0px";
}

window.addEventListener("resize", hideMenu);