import * as building from './App.js';
import calc from './Calc';

var layerUp = 0;
var layerDown = 0;

export default function ChangePav(numPav, position){

   if (numPav>0 && position===0){
      layerDown--;
      building.arrBuilding[layerDown+51] = document.getElementById("Ar_"+(layerDown+51)).value;
      building.arrBuilding[layerUp+50] = document.getElementById("Ar_"+(layerUp+50)).value;

      let oldLayer = document.getElementById("layers").innerHTML;
      let newLayer = '<tr id="'+(layerDown+50)+'"><td><small>'+layerDown+'</small><br><input id="Pav_'+(50+layerDown)+'" class="Pavimento" Value="'+(layerDown * -1)+'º Subsolo"></input></td><td><small>Área (m²):</small></br><input id="Ar_'+(50+layerDown)+'" Class="Area" Value ="'+building.arrBuilding[50+layerDown]+'" type="number" ></input></td></tr>';
      
      document.getElementById("layers").innerHTML = newLayer + oldLayer;
      setArrInput();
   }
   if (numPav>0 && position===1){
      layerUp++;
      building.arrBuilding[layerUp+49] = document.getElementById("Ar_"+(layerUp+49)).value;
      building.arrBuilding[layerDown+50] = document.getElementById("Ar_"+(layerDown+50)).value;

      let oldLayer = document.getElementById("layers").innerHTML;
      let newLayer = '<tr id="'+(layerUp+50)+'"><td><small>'+(layerUp + 1)+'</small><br><input id="Pav_'+(50+layerUp)+'" class="Pavimento" Value="'+(layerUp)+'º Pavimento"></input></td><td><small>Área (m²):</small></br><input id="Ar_'+(50+layerUp)+'" Class="Area" Value ="'+building.arrBuilding[50+layerUp]+'" type="number" "></input></td></tr>';
      
      document.getElementById("layers").innerHTML = oldLayer + newLayer;
      setArrInput();

   }
   if (numPav<0 && position===0 && layerDown<0){
      let parent = document.getElementById("layers");
      let child = document.getElementById(layerDown+50);
      parent.removeChild(child);
      building.arrBuilding[layerDown+50] = 0;
      layerDown++;
   }
   if (numPav<0 && position===1 && layerUp>0){
      let parent = document.getElementById("layers");
      let child = document.getElementById(layerUp+50);
      parent.removeChild(child);
      building.arrBuilding[layerUp+50] = 0;
      layerUp--;
   }

   function setArrInput(){
      for (let i = 0; i < 100; i++){
         var func = document.querySelector('input#Ar_'+ i);
         if ( func != null){           
            func.value = building.arrBuilding[i];
            func.addEventListener("keydown", calc);
            func.addEventListener("keyup", calc);
         }
      }
   }
   calc();
}

export var layerUp;
export var layerDown;