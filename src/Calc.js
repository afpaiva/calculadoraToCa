import * as building from './App.js';

export default function Calc(){

    //getting values:
    var arTotalConstruida = 0;
    var arTerreno = document.querySelector('input#ArTerreno').value;
    var arProj = document.querySelector('input#ArProj').value;
    var arPerm = document.querySelector('input#ArPerm').value;
    
    for (let i = 0; i < 100; i++){
        if (document.getElementById("Ar_"+ i) != null){
            building.arrBuilding[i] = document.getElementById("Ar_"+ i).value;
            arTotalConstruida += Number(building.arrBuilding[i]);
        }
    }

    //validation:

    //calculation:
    var taxaDeOcupacao = arTotalConstruida * 100 / arTerreno;
    var coefAproveitamento = arProj / arTerreno;
    var taxaDePermeabilidade = arPerm * 100 / arTerreno;

    //display results:
    document.querySelector('div#arTotalConstruida').innerHTML = arTotalConstruida;
    document.querySelector('div#taxaDeOcupacao').innerHTML = taxaDeOcupacao;
    document.querySelector('div#coefAproveitamento').innerHTML = coefAproveitamento;
    document.querySelector('div#taxaDePermeabilidade').innerHTML = taxaDePermeabilidade;
 }