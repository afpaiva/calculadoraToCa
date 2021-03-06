import * as building from './App.js';
import infinity from '../Assets/infinity.png';

export default function Calc(shareIt){

    // getting values from input:
    var arTotalConstruida = 0;
    var arTerreno = document.querySelector('input#ArTerreno').value;
    var arProj = document.querySelector('input#ArProj').value;
    var arPerm = document.querySelector('input#ArPerm').value;
    // read the array and update with the input values:
    for (let i = 0; i < 100; i++){
        if (document.getElementById("Ar_"+ i) != null){
            building.arrBuilding[i] = document.getElementById("Ar_"+ i).value;
            arTotalConstruida += Number(building.arrBuilding[i]);
        }
    }

    // calculation / validation:
    var taxaDeOcupacao = (arTotalConstruida * 100 / arTerreno).toFixed(2);
    taxaDeOcupacao = taxaDeOcupacao == "Infinity" || isNaN(taxaDeOcupacao) ? '<img src='+infinity+'>' : taxaDeOcupacao;
    var coefAproveitamento = coefAproveitamento%2 == 0 ? (arProj / arTerreno) : (arProj / arTerreno).toFixed(2);
    coefAproveitamento = coefAproveitamento == "Infinity" || isNaN(coefAproveitamento) ? '<img src='+infinity+'>' : coefAproveitamento;
    var taxaDePermeabilidade = (arPerm * 100 / arTerreno).toFixed(2);
    taxaDePermeabilidade = taxaDePermeabilidade == "Infinity" || isNaN(taxaDePermeabilidade) ? '<img src='+infinity+'>' : taxaDePermeabilidade;

    // display results:
    document.querySelector('div#arTotalConstruida').innerHTML = arTotalConstruida.toFixed(2);
    document.querySelector('div#taxaDeOcupacao').innerHTML = taxaDeOcupacao;
    document.querySelector('div#coefAproveitamento').innerHTML = coefAproveitamento;
    document.querySelector('div#taxaDePermeabilidade').innerHTML = taxaDePermeabilidade;

    // when calc() receive shareIt, it will share the results on Whatsapp
    if (shareIt == "shareIt"){
        var whatsAppTag = "https://api.whatsapp.com/send?text=Resultado dos cálculos:%0A %0A";
        whatsAppTag += "Área do terreno: "+(arTerreno*1).toFixed(2)+"m²";
        whatsAppTag += "%0AÁrea de projeção ou de sombra: "+(arProj*1).toFixed(2)+"m² ";
        whatsAppTag += "%0AÁrea permeável: "+(arPerm*1).toFixed(2)+"m² ";
        whatsAppTag += "%0AÁrea total da construção: "+(arTotalConstruida*1).toFixed(2)+"m² ";
        whatsAppTag += "%0ATaxa de ocupação: "+taxaDeOcupacao+"% ";
        whatsAppTag += "%0ACoeficiente ou índice de aproveitamento:" +coefAproveitamento;
        whatsAppTag += "%0ATaxa de permeabilidade: "+taxaDePermeabilidade+"% %0A";
        whatsAppTag += "%0A %0ACalculadora TO.CA. :%0Awww.ensaios3d.com/apps";

        window.open(whatsAppTag);
    }

    // when calc() receive shareMe, it will share the web application link
    if (shareIt == "shareMe"){
        var whatsAppTag = "https://api.whatsapp.com/send?text=Faça cálculos de Taxa de Ocupação, Coeficiente de Aproveitamento e Taxa de Permeabilidade de forma rápida e prática!";
        whatsAppTag += "%0ACalculadora TO;CA; %0A| Acesse www.ensaios3d.com/apps |";

        window.open(whatsAppTag);
    }
 }

 export var whatsAppTag;