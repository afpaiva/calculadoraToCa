import React from 'react';
import '../style.css';
import Header from '../Components/Header';

// Insert and remove floors above and below the ground floor (in PT/BR: Pavimento Térreo)
import ChangePav from './ChangePav.js'; 
// This function update all values in screen
import Calc from './Calc.js';
// Array created to receive floor areas (Ground Floor has ID=50, above it 50+1, and below 50-1)
var arrBuilding = [];
for (let i = 0; i < 100; i++){
  arrBuilding[i] = '';
}

// call the application
// web app body:
function App() {
  return (
    <>
  <Header />
  <div className="container">
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
              <input type="number" id="ArTerreno" onKeyDown={() => Calc()} onKeyUp={() => Calc()}></input>
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
                <input id="layerP_50" className="Pavimento" defaultValue="Pav. Térreo" onKeyDown={() => Calc()} onKeyUp={() => Calc()} onClick={() => Calc()}></input>
              </td>
            <td>
              <small>Área (m²):</small><br></br>
              <input id='Ar_50' type="number" className="Area" onKeyDown={() => Calc()} onKeyUp={() => Calc()} onClick={() => Calc()}></input>
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
              <input id="ArProj" type="number" onKeyDown={() => Calc()} onKeyUp={() => Calc()}></input>
            </td>
          </tr>
          <tr>
            <td>
             <small>Área permeável (m²):</small>
            </td>
            <td>
              <input id="ArPerm" type="number" onKeyDown={() => Calc()} onKeyUp={() => Calc()}></input>
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
             <h3> <div className="result" id="arTotalConstruida">0,00</div><small> m²</small></h3>
            </td>
          </tr>
          <tr>
            <td>
              <small>Taxa de ocupação TO:</small>
            </td>
            <td align="right">
             <h3><div className="result" id="taxaDeOcupacao">00,00</div><small> %</small></h3>
            </td>
          </tr>
          <tr>
            <td>
              <small>Coeficiente de<br/>aproveitamento CA:</small>
            </td>
            <td align="right">
              <h3><div className="result" id="coefAproveitamento">00,00</div></h3>
            </td>
          </tr>
          <tr>
            <td>
              <small>Taxa de permeabilidade:</small>
            </td>
            <td align="right">
             <h3><div className="result" id="taxaDePermeabilidade">00,00</div><small> %</small></h3>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
     <button id="Whatsapp" onClick={() => Calc("shareIt")}><small>Enviar resultados via Whatsapp</small></button>
     <div style={{display:'flex', justifyContent:'center', marginTop: 20+'px'}}>
     <div className="fb-share-button" data-href="http://www.ensaios3d.com/apps" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.ensaios3d.com%2Fapps&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Compartilhar</a></div>
     </div>
     <button id="Whatsapp" onClick={() => Calc("shareMe")} style={{width:135+'px', borderRadius: 5}}><small>Compartilhe via Whatsapp</small></button>
    </div>
  </div>
  </>
  );
}

export default App;
export var arrBuilding;