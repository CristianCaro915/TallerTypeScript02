console.log("hola");
import { series } from './data.js';
var dataSeries = series;
/* Asegurar que si existe elemento "!" */
var seriesTable = document.getElementById("series");
/* Array vacio para guardar lo clickeado*/
var elementosClick = new Array();
function cargarData() {
    //encabezado
    var firstRow = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    firstRow.className = "blancox";
    col1.innerHTML = "#";
    col2.innerHTML = "Nombre";
    col3.innerHTML = "Channel";
    col4.innerHTML = "Seasons";
    firstRow.appendChild(col1);
    firstRow.appendChild(col2);
    firstRow.appendChild(col3);
    firstRow.appendChild(col4);
    seriesTable.appendChild(firstRow);
    //vars para hallar promedio
    var i = 0;
    var promedioTemporadas = 0;
    dataSeries.map(function (serie) {
        var serieRow = document.createElement("tr");
        var colS1 = document.createElement("td");
        var colS2 = document.createElement("td");
        var colS3 = document.createElement("td");
        var colS4 = document.createElement("td");
        var aElement = document.createElement("a");
        aElement.innerHTML = "".concat(serie.name);
        aElement.href = "#";
        var idAnchor = prompt("Digite un ID que no vaya usado: ");
        aElement.id = idAnchor; //asegurar valor no null
        aElement.addEventListener("click", function (event) {
            elementosClick.push(event);
            event.preventDefault();
            console.log(elementosClick);
            //console.log("ID de clickeado es",event.target)
            //obtener ID
            console.log("ID:", this.id);
            //añadir card elements
            var div = document.getElementsByClassName("card")[0];
            var imagen = document.createElement("img");
            var tittle = document.createElement("h5");
            var text = document.createElement("p");
            var link = document.createElement("a");
            imagen.src = "".concat(serie.linkImg);
            tittle.innerHTML = serie.name;
            text.innerHTML = serie.description;
            link.href = "".concat(serie.linkView);
            div.appendChild(imagen);
            div.appendChild(tittle);
            div.appendChild(text);
            div.appendChild(link);
        });
        colS2.className = "azulejo";
        serieRow.className = "serieRow";
        colS1.innerHTML = "".concat(serie.id);
        colS2.appendChild(aElement);
        colS3.innerHTML = "".concat(serie.channel);
        colS4.innerHTML = "".concat(serie.seasons);
        serieRow.appendChild(colS1);
        serieRow.appendChild(colS2);
        serieRow.appendChild(colS3);
        serieRow.appendChild(colS4);
        seriesTable.appendChild(serieRow);
        i += 1;
        promedioTemporadas += serie.seasons;
    });
    var promedio = document.createElement("p");
    promedio.innerHTML = "Seasons Average: ".concat(promedioTemporadas / i);
    document.body.appendChild(promedio);
}
/*
function displayTool(){
    let div =document.getElementsByClassName("card")[0];
    let imagen = document.createElement("img");
    let tittle =document.createElement("h5");
    let text =document.createElement("p");

    
    div.appendChild(imagen);
    div.appendChild(tittle);
    div.appendChild(text);

    let allAnchors= document.querySelectorAll('a');
    let notLink = new Array();

    allAnchors.forEach(function(element) {
    notLink.push(element.parentElement);
    //usar input/alert
    });

    console.log(notLink);
}
*/
cargarData();
