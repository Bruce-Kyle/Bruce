document.addEventListener("keydown",logkey);
function logkey(e) {
var key=e.key
var p=document.getElementById("constant");
p.innerHTML+= key;
}
