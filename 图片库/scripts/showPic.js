function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

function prepareplaceholder(){
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var images=document.createElement("img");
  images.setAttribute("id","placeholder");
  images.setAttribute("src","images/placeholder.gif");
  images.setAttribute("alt","my image gallery");
  var description=document.createElement("p");
  description.setAttribute("id","description")
  var text=document.createTextNode("Choose an image.");
  description.appendChild(text);
  var imagegallery=document.getElementById("imagegallery");
  insertAfter(images,imagegallery);
  insertAfter(description,images);
}

function prepareGallery(){
    if (!document.getElementsByTagName) return false;
    var imagegallery=document.getElementById("imagegallery");
    var links=imagegallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
      links[i].onclick=function(){
      return  showPic(this);
    }
  }   
}

function showPic(whichPic){
    var src=whichPic.getAttribute("href");
    var title=whichPic.getAttribute("title");
    var images=document.getElementById("placeholder");
    images.setAttribute("src",src);
    var description=document.getElementById("description");
    description.firstChild.nodeValue=title;
    return false;
}


  
addLoadEvent(prepareplaceholder);
addLoadEvent(prepareGallery);
var colors=["red","yellow","black","green"];
var remove1=colors.splice(0,2);
var remove2=colors.splice(1,0,"blue","white","purple");
var remove3=colors.splice(2,2,"maroon","pink");