import * as building from './App.js';

export default function Calc(){

    //get values:
    var arTerreno = document.querySelector('input#ArTerreno').value;
    
    var arTotalConstruida = 0;
    for (let i = 0; i < 100; i++)
        arTotalConstruida += Number(building.arrBuilding[i]);

    for (let i = 0; i < 100; i++)
    if (document.getElementById("Ar_"+ i) != null)
       building.arrBuilding[i] = document.getElementById("Ar_"+ i).value;

    //validation:

    //calculation:

    //display results:

    document.querySelector('h3#arTotalConstruida').innerHTML = arTotalConstruida;

 }