
var xmlhttp = null,xmlDoc = "";
if(window.XMLHttpRequest){
xmlhttp = new XMLHttpRequest();
}
else if(window.ActiveXObject){
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
    xmlhttp.open("GET","2.xml",false);
    xmlhttp.send(null);
    xmlDoc = xmlhttp.responseXML;
    var div = document.getElementsByTagName("div")[0];
    div.innerHTML = xmlDoc.getElementsByTagName("phone")[0].nodeValue;