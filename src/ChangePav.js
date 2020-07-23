import * as building from './App.js';
import calc from './Calc';

var layerUp = 0;
var layerDown = 0;

export default function ChangePav(numPav, position){

   if (numPav>0 && position===0){
      layerDown--;
      building.arrBuilding[layerDown+51] = document.getElementById("Ar_"+(layerDown+51)).value;

      let oldLayer = document.getElementById("layers").innerHTML;
      let newLayer = '<tr id="'+(layerDown+50)+'"><td><small>'+layerDown+'</small><br><input id="Pav_'+(50+layerDown)+'" class="Pavimento" Value="'+(layerDown * -1)+'º Subsolo" onChange="() => Calc()"></input></td><td><small>Área (m²):</small></br><input id="Ar_'+(50+layerDown)+'" Class="Area" Value ="'+building.arrBuilding[50+layerDown]+'"></input></td></tr>';
      document.getElementById("layers").innerHTML = newLayer + oldLayer;

      for (let i = 0; i < 100; i++)
         if (document.getElementById("Ar_"+ i) != null)
            document.getElementById("Ar_"+ i).value = building.arrBuilding[i];
   }
   if (numPav<0 && position===0 && layerDown<0){
      let parent = document.getElementById("layers");
      let child = document.getElementById(layerDown+50);
      parent.removeChild(child);
      layerDown++;
   }
   if (numPav>0 && position===1){
      layerUp++;
      building.arrBuilding[layerUp+49] = document.getElementById("Ar_"+(layerUp+49)).value;

      let oldLayer = document.getElementById("layers").innerHTML;
      let newLayer = '<tr id="'+(layerUp+50)+'"><td><small>'+(layerUp + 1)+'</small><br><input id="Pav_'+(50+layerUp)+'" class="Pavimento" Value="'+(layerUp)+'º Pavimento" onChange="() => Calc()"></input></td><td><small>Área (m²):</small></br><input id="Ar_'+(50+layerUp)+'" Class="Area" Value ="'+building.arrBuilding[50+layerUp]+'"></input></td></tr>';
      document.getElementById("layers").innerHTML = oldLayer + newLayer;

      for (let i = 0; i < 100; i++)
      if (document.getElementById("Ar_"+ i) != null)
         document.getElementById("Ar_"+ i).value = building.arrBuilding[i];
   }
   if (numPav<0 && position===1 && layerUp>0){
      let parent = document.getElementById("layers");
      let child = document.getElementById(layerUp+50);
      parent.removeChild(child);
      layerUp--;
   }
   calc();
}

export var layerUp;
export var layerDown;