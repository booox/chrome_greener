document.body.style.backgroundColor='#CCE8CF'

var divs = document.getElementsByTagName("DIV");

for(var i = 0; i < divs.length; i++) {
  var div = divs[i];
  if (div.style) {
    div.style.backgroundColor = '#CCE8CF'
  }
}

/*
var childNodes = document.body.childNodes

for(var i=0; i<childNodes.length; i++) {
  if (childNodes[i].style) {
    childNodes[i].style.backgroundColor = '#CCE8CF'
    //alert(childNodes[i].style.backgroundColor)
  }

}*/
