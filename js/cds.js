var currentCol;
var currentOrder;
var data = {};

function loadData() {
    loadXMLDoc("xml/cds.xml", function(result) {
        data.xml = result;
        loadXMLDoc("xml/cds.xsl", function(result) {
            data.xsl = result;
            displayData();
        })
    })
}

function displayData(col){
	sort(col);

    // code for IE
    if (window.ActiveXObject) {
        ex = data.xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else 
        if (document.implementation && document.implementation.createDocument) {
            xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(data.xsl);
            resultDocument = xsltProcessor.transformToFragment(data.xml, document);
			exampleDiv = document.getElementById("example");
			exampleDiv.innerHTML = "";
            exampleDiv.appendChild(resultDocument);
        }
}

function sort(col) {
	element = data.xsl.getElementById("ordenar");
	
	if (currentCol == col) {
		if (currentOrder == "ascending")
			currentOrder = "descending";
		else
			currentOrder = "ascending";
	} else
		currentOrder = "ascending";
		
	currentCol = col;
	
    if (element === undefined) return;
	element.setAttribute("select",currentCol);
	element.setAttribute("order", currentOrder);
}

function loadXMLDoc(filename, callback) {
    if (window.ActiveXObject)
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    else 
        xhttp = new XMLHttpRequest();

    xhttp.open("GET", filename, true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200)
            callback(xhttp.responseXML);
    }
    xhttp.send();
}
