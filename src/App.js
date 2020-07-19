import React from 'react';
import './style.css';
import mais1pavAbaixo from './calc.js';

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
                  <input id="ArTerreno"></input>
                </td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <div id="mais" onClick={mais1pavAbaixo()}>+</div>
          <div id="menos">-</div>
          <small> inserir pavimento abaixo</small>
          <div className="Wtborder">
          <table width="100%">
            <tbody>
              <tr>
                <td>
                  <small>1</small>
                  <br></br>
                  <input id="Pavimento_" className="Pavimento" defaultValue="Pav. Térreo"></input>
                </td>
                <td>
                  <small>Área (m²):</small><br></br>
                  <input id="Ar_"></input>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <div id="mais">+</div>
          <div id="menos">-</div>
          <small> inserir pavimento acima</small>
          <p></p>
          <table>
            <tbody>
              <tr>
                <td>
                  <small>Área de projeção (m²):</small>
                </td>
                <td>
                  <input id="ArProj"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <small>Área de permeável (m²):</small>
                </td>
                <td>
                  <input id="ArPerm"></input>
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
                    <h3>00,00<small> m²</small></h3>
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
