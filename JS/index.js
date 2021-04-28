window.onload = () => {
  const xmlFile =
    "https://raw.githubusercontent.com/Borja-29/biblioteca/master/XML/mixml.xml";

  const cardHTML = document.getElementById("card");
  const librosHTML = document.getElementById("libros");
  const titulo = document.getElementById("titulo");
  const categoria = document.getElementById("categoria");
  const contenido = document.getElementById("contenido");
  const isbn = document.getElementById("isbn");
  const fecha = document.getElementById("fecha");
  const bandera = document.getElementById("bandera");
  const comprar = document.getElementById("comprar");
  console.log(bandera.children);

  const isbnEsIngles = (isbn) => {
    if (isbn[3] === '1')
      return true;
    else
      return false;
  }

  const loadXMLDoc = () => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", xmlFile, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          procesar(this.response);
        } else {
          console.log("Error loading page\n");
        }
      }
    };
  }

  const procesar = (xml) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");

    const libros = xmlDoc.getElementsByTagName("libro");
    let librosText = '';
    for (let index = 0; index < libros.length; index++) {
      const libro = libros[index];
      librosText += `<li id="${libro.children[2].innerHTML}">${libro.children[0].innerHTML} - ${libro.children[1].innerHTML}</li>`;
    }
    librosHTML.innerHTML = librosText;


    const elements = document.getElementsByTagName("li");
    for (let index = 0; index < elements.length; index++) {
      const li = elements[index];
      li.addEventListener("click", (event) => {
        const tagId = event.target["id"];
        let index = 0;
        while (libros[index].children[2].innerHTML !== tagId) {
          index++;
        }
        titulo.innerText = libros[index].children[0].innerHTML;
        categoria.innerText = "Autor: " + libros[index].children[1].innerHTML;
        contenido.innerText = libros[index].children[6].innerHTML;
        isbn.innerText = "ISBN: " + libros[index].children[2].innerHTML;
        fecha.innerText = "Fecha de lanzamiento: " + libros[index].children[4].innerHTML;
        comprar.attributes[0].nodeValue = libros[index].children[5].innerHTML;
        const esingles = isbnEsIngles(libros[index].children[2].innerHTML);
        if (esingles==true)
          bandera.attributes[0].nodeValue = "Paises/Reino_Unido.png";
        else
          bandera.attributes[0].nodeValue = "Paises/Espana.png";
        cardHTML.className = "mostrar";
      });
    }
  }

  loadXMLDoc();
};
