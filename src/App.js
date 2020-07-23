import React from 'react';
import './style.css';

import ChangePav from './ChangePav.js';
import Calc from './Calc.js';

var arrBuilding = [];
for (let i = 0; i < 100; i++){
    arrBuilding[i] = 0;
}

function App() {
  return (
  <div className="container">
    <div id = "Bg"></div>
    <div id="calcTitle">
      <h1>CALCULADORA TO.CA.</h1>
    </div>
    <div id="calc">
      <table>
        <tbody>
          <tr>
            <td>
              <small>Área do terreno (m²):</small>
            </td>
            <td>
              <input id="ArTerreno" defaultValue="0" onKeyDown={() => Calc()}></input>
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <div className="areaBtPav">
        <button type="button" onClick={() => ChangePav(1,0)}>
        +
        </button>
        <button type="button" onClick={() => ChangePav(-1,0)}>
        -
        </button>
        <small> inserir pavimento abaixo</small>
      </div>
      <div className="Wtborder">
        <table width="100%">
          <tbody id="layers">
            <tr id = "0">
              <td>
                <small>1</small>
                <br></br>
                <input id="layerP_50" className="Pavimento" defaultValue="Pav. Térreo"  onKeyDown={() => Calc()}></input>
              </td>
            <td>
              <small>Área (m²):</small><br></br>
              <input id="Ar_50" className="Area" defaultValue="0"  onKeyDown={() => Calc()}></input>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="areaBtPav">
        <button type="button" onClick={() => ChangePav(1,1)}>
        +
        </button>
        <button type="button" onClick={() => ChangePav(-1,1)}>
        -
        </button>
        <small> inserir pavimento acima</small>
      </div>
      <p></p>
      <table>
        <tbody>
          <tr>
            <td>
              <small>Área de projeção (m²):</small>
            </td>
            <td>
              <input id="ArProj" defaultValue="0" onKeyDown={() => Calc()}></input>
            </td>
          </tr>
          <tr>
            <td>
             <small>Área de permeável (m²):</small>
            </td>
            <td>
              <input id="ArPerm" defaultValue="0" onKeyDown={() => Calc()}></input>
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <div className="Wtborder">
      <table width="100%">
        <tbody>
          <tr>
            <td>
             <small>Área total da construção:</small>
            </td>
            <td align="right">
             <h3 id="arTotalConstruida">0,00<small> m²</small></h3>
            </td>
          </tr>
          <tr>
            <td>
              <small>Taxa de ocupação TO:</small>
            </td>
            <td align="right">
             <h3>00,00<small> %</small></h3>
            </td>
          </tr>
          <tr>
            <td>
              <small>Coeficiente de<br/>aproveitamento CA:</small>
            </td>
            <td align="right">
              <h3>00,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <small>Taxa de permeabilidade:</small>
            </td>
            <td align="right">
             <h3>00,00<small> %</small></h3>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
     <div id="Whatsapp"><small>Compartilhar resultados via Whatsapp</small></div>
    </div>
  </div>
  );
}

export default App;
export var arrBuilding;