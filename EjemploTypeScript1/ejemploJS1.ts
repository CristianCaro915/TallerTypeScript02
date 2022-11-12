console.log("hola")
import {series} from './data.js';
import {Serie} from './serie.js';

var dataSeries:  Serie[] = series;

/* Asegurar que si existe elemento "!" */
let seriesTable: HTMLElement=document.getElementById("series")!;

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
    
    let div =document.getElementsByClassName("card")[0];
    let imagen = document.createElement("img");
    let tittle =document.createElement("h5");
    let text =document.createElement("p");
    let link = document.createElement("a");
    imagen.style.display="none";
    tittle.style.display="none";
    text.style.display="none";
    link.style.display="none";
    imagen.style.maxHeight="300px";
    imagen.style.maxWidth="300px";
    imagen.style.paddingLeft="20px";
    tittle.style.display="none";
    tittle.style.paddingLeft="20px";
    text.style.paddingLeft="20px";
    link.style.paddingLeft="20px";
    
    div.appendChild(imagen);
    div.appendChild(tittle);
    div.appendChild(text);
    div.appendChild(link);

    dataSeries.map(function (serie){
        let serieRow = document.createElement("tr");
        let colS1 = document.createElement("td");
        let colS2 = document.createElement("td");
        let colS3 = document.createElement("td");
        let colS4 = document.createElement("td");
        
        let aElement = document.createElement("a");
        aElement.innerHTML=`${serie.name}`;
        aElement.href="#";
        aElement.id=i.toString();
        aElement.addEventListener("click",function(event) {
            imagen.src=`${serie.linkImg}`;
            imagen.style.display="block";
            imagen.style.alignContent="center";
            imagen.style.alignItems="center";
            tittle.innerHTML=serie.name;
            tittle.style.display="block";
            text.style.fontFamily="Verdana, Geneva, Tahoma, sans-serif";
            text.innerHTML=serie.description;
            text.style.display="block";
            link.innerHTML="Ver más información"
            link.href=`${serie.linkView}`;
            link.style.display="block";
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

cargarData();

