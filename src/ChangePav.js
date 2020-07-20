var layerUp = 0;
var layerDown = 0;

export default function ChangePav(numPav, position){
   
   if (numPav>0 && position==0){
      layerDown--;
      let oldLayer = document.getElementById("layers").innerHTML;
      let newLayer = '<tr id="'+layerDown+'"><td><small>'+layerDown+'</small><br><input id="Pav_0" class="Pavimento" Value="'+(layerDown * -1)+'º Subsolo"></input></td><td><small>Área (m²):</small></br><input id="Ar_" Value ="0"></input></td></tr>';
      document.getElementById("layers").innerHTML = newLayer + oldLayer;
   }
   if (numPav<0 && position==0 && layerDown<0){
      let parent = document.getElementById("layers");
      let child = document.getElementById(layerDown);
      parent.removeChild(child);
      layerDown++;
   }
   if (numPav>0 && position==1){
      layerUp++;
      let oldLayer = document.getElementById("layers").innerHTML;
      let newLayer = '<tr id="'+layerUp+'"><td><small>'+(layerUp + 1)+'</small><br><input id="Pav_0" class="Pavimento" Value="'+(layerUp)+'º Pavimento"></input></td><td><small>Área (m²):</small></br><input id="Ar_" Value ="0"></input></td></tr>';
      document.getElementById("layers").innerHTML = oldLayer + newLayer;
   }
   if (numPav<0 && position==1 && layerUp>0){
      let parent = document.getElementById("layers");
      let child = document.getElementById(layerUp);
      parent.removeChild(child);
      layerUp--;
   }
   
}
export var layerUp;
export var layerDown;