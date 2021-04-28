function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    /*xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };*/
    xmlhttp.open("GET", "./XML/mixml.xml", true);
    /*xmlhttp.onreadystatechange = function (aEvt) {
        if (xmlhttp.readyState == 4) {
           if(xmlhttp.status == 0)
            console.log(xmlhttp.responseText);
           else
            console.log("Error loading page\n");
        }
      };
      xmlhttp.send(null);*/
    xmlhttp.send();
    if (xmlhttp.status == 0) {
        console.log(xmlhttp.responseXML);
    }
}
loadXMLDoc();


function myFunction(xml) {
    var i, xmlDoc, txt, imagen;
    i = 2;
    xmlDoc = xml.responseXML;
    console.log(xmlDoc);
    txt = "";
    titulo = xmlDoc.getElementsByTagName("titulo");
    autor = xmlDoc.getElementsByTagName("autor");
    ISBN = xmlDoc.getElementsByTagName("ISBN");
    editorial = xmlDoc.getElementsByTagName("editorial");
    fecha = xmlDoc.getElementsByTagName("fecha");
    sinopsis = xmlDoc.getElementsByTagName("sinopsis");

    isbn = ISBN[i].childNodes[0].nodeValue;
    bandera = "<img class='libreria__imagen' src = " + "Paises/" + isbn.slice(3, 4) + ".png" + " alt = 'bnd'> <br>" +
        "Fecha de publicacion: " + fecha[0].childNodes[0].nodeValue;

    ruta = "Portadas/" + ISBN[i].childNodes[0].nodeValue + '.jpg';
    apertura = '<div class="contenedor dos-columnas"> <article class="entrada-blog">';
    cierre = "</article> </div>";
    imagen = apertura + "<img class='libreria__imagen' src = " + ruta + " alt = 'img'>" + "<br>";

    txt += "Titulo: " + titulo[i].childNodes[0].nodeValue + "<br>" + "<br>" +
        "Autor: " + autor[i].childNodes[0].nodeValue + "<br>" + "<br>" +
        "ISBN: " + ISBN[i].childNodes[0].nodeValue + "<br>" + "<br>" +
        "Editorial: " + editorial[i].childNodes[0].nodeValue + "<br>" + "<br>" +
        "Sinopsis: " + sinopsis[i].childNodes[0].nodeValue + cierre + "<br>";

    /*document.getElementById("foto").innerHTML = imagen;
    document.getElementById("demo").innerHTML = txt;
    document.getElementById("icon").innerHTML = bandera;*/
}