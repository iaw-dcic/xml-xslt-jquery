var currentCol;
var currentOrder;
var data = {};

$(document).ready(function(){
    loadData();
});

function loadData() {
    loadXMLDoc("xml/books.xml", function(result) {
        data.xml = result;
        loadXMLDoc("xml/books.xsl", function(result) {
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
//        document.getElementById("example").innerHTML = ex;
		$("#example").html(ex);
    }
    // code for Mozilla, Firefox, Opera, etc.
    else 
        if (document.implementation && document.implementation.createDocument) {
            xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(data.xsl);
            resultDocument = xsltProcessor.transformToFragment(data.xml, document);
//			exampleDiv = document.getElementById("example");
//			exampleDiv.innerHTML = "";
//          exampleDiv.appendChild(resultDocument);
			$("#example").html("").append(resultDocument);
        }
	$("th").css("cursor","pointer").css("text-transform","capitalize").click(headerClicked);
	$("h1").css("text-align", "center");
}

function headerClicked(event) {
	displayData(event.target.textContent);
}

function sort(xsl, col) {
	// element = xsl.getElementById("ordenar");
	
	if (currentCol == col) {
		if (currentOrder == "ascending")
			currentOrder = "descending";
		else
			currentOrder = "ascending";
	} else
		currentOrder = "ascending";
		
	currentCol = col;

    $("#ordenar", data.xsl).attr("select", currentCol).attr("order", currentOrder)
	
	// element.setAttribute("select",currentCol);
	// element.setAttribute("order", currentOrder);
}

function loadXMLDoc(filename, callback){
    $.ajax({
        type: "GET",
        url: filename,
        dataType: "xml",
        success: function(xml) {
            callback(xml);
        }
    });
}
