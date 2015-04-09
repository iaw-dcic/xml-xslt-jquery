
function cargar() {
	document.getElementById("articulos").innerHTML = "";
	var input = document.getElementById("xmlName");
	var filename = input.value + ".xml";
	mostrarXML(filename);
}

function mostrarXML(xmlName){
	var i=0;
	var xmlDoc = loadXMLDoc("xml/" + xmlName); //obtengo el archivo .xml
	var articulos = xmlDoc.getElementsByTagName("articulo");
	var divArticulos = document.getElementById("articulos");
	for (i=0; i < articulos.length; i++) {
		divArticulos.appendChild(mostrarArticulo(articulos[i]));
	}
	document.getElementById("cantidad").firstChild.nodeValue = articulos.length;
}

function mostrarArticulo(articulo) {
	var i=0;
	var elementos = articulo.children;
	var divArticulo = document.createElement("div");
	divArticulo.setAttribute("class", "articulo");
	for (i=0; i < elementos.length; i++) {
		divArticulo.appendChild(agregarElemento(elementos[i],0));
	}
	return divArticulo;
}

function agregarElemento(elemento, nivel) {
	if (elemento.children.length == 0) {
		return mostrarElemento(elemento, nivel);
	} else {
		var i=0;
		var elementos = elemento.children;
		var nuevoDiv = document.createElement("div");
		var spanTitulo = document.createElement("span");
		spanTitulo.setAttribute("class", "titulo"+nivel);
		spanTitulo.appendChild(document.createTextNode(elemento.nodeName));
		nuevoDiv.appendChild(spanTitulo);
		for (i=0; i < elementos.length; i++) {
			nuevoDiv.appendChild(agregarElemento(elementos[i], nivel+1));
		}
		return nuevoDiv;
	}
}

function mostrarElemento(elemento, nivel){
/*
<div class="elemento">
	<span class="etiqueta">Etiqueta:</span>
	<span class="valor">Valor</span>
</div>
*/
	var nuevoDiv = document.createElement("div");
	nuevoDiv.setAttribute("class", "elemento"+nivel);
	var spanEtiqueta = document.createElement("span");
	spanEtiqueta.setAttribute("class", "etiqueta"+nivel);
	spanEtiqueta.appendChild(document.createTextNode(elemento.nodeName + ":"));
	var spanValor = document.createElement("span");
	spanValor.setAttribute("class", "valor"+nivel);
	spanValor.appendChild(document.createTextNode(elemento.firstChild.nodeValue));
	nuevoDiv.appendChild(spanEtiqueta);
	nuevoDiv.appendChild(spanValor);
	return nuevoDiv;
}

