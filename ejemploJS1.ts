console.log("hola")
import {series} from './data.js';
import {Serie} from './serie.js';

var dataSeries:  Serie[] = series;

/* Asegurar que si existe elemento "!" */
let seriesTable: HTMLElement=document.getElementById("series")!;
/* Array vacio para guardar lo clickeado*/
var elementosClick = new Array();

function cargarData(){
    //encabezado
    let firstRow = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");

    firstRow.className="blancox";

    col1.innerHTML="#";
    col2.innerHTML="Nombre";
    col3.innerHTML="Channel";
    col4.innerHTML="Seasons";

    firstRow.appendChild(col1);
    firstRow.appendChild(col2);
    firstRow.appendChild(col3);
    firstRow.appendChild(col4);
    seriesTable.appendChild(firstRow);

    //vars para hallar promedio
    let i:number=0;
    let promedioTemporadas:number=0;

    dataSeries.map(function (serie){
        let serieRow = document.createElement("tr");
        let colS1 = document.createElement("td");
        let colS2 = document.createElement("td");
        let colS3 = document.createElement("td");
        let colS4 = document.createElement("td");
        
        let aElement = document.createElement("a");
        aElement.innerHTML=`${serie.name}`;
        aElement.href="#";
        let idAnchor =prompt("Digite un ID que no vaya usado: ");
        aElement.id=idAnchor!;//asegurar valor no null
        aElement.addEventListener("click",function(event) {
            elementosClick.push(event);
            event.preventDefault();
            console.log(elementosClick);
            //console.log("ID de clickeado es",event.target)
            //obtener ID
            console.log("ID:",this.id)
            //añadir card elements
            let div =document.getElementsByClassName("card")[0];
            let imagen = document.createElement("img");
            let tittle =document.createElement("h5");
            let text =document.createElement("p");
            let link = document.createElement("a");
            
            imagen.src=`${serie.linkImg}`;
            tittle.innerHTML=serie.name;
            text.innerHTML=serie.description;
            link.href=`${serie.linkView}`;


            div.appendChild(imagen);
            div.appendChild(tittle);
            div.appendChild(text);
            div.appendChild(link);
            //crear funcion aparte que no sobre escriba valores usando el arreglo
            //modificar la vista el css al agregar el card para un display cómodo
            
        });

        colS2.className="azulejo";
        serieRow.className="serieRow";

        colS1.innerHTML=`${serie.id}`;
        colS2.appendChild(aElement);
        colS3.innerHTML=`${serie.channel}`;
        colS4.innerHTML=`${serie.seasons}`;

        serieRow.appendChild(colS1);
        serieRow.appendChild(colS2);
        serieRow.appendChild(colS3);
        serieRow.appendChild(colS4);
        seriesTable.appendChild(serieRow);
        i+=1;
        promedioTemporadas+=serie.seasons
    } );
    let promedio = document.createElement("p");
    promedio.innerHTML=`Seasons Average: ${promedioTemporadas/i}`;
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

