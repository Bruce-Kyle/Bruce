document.addEventListener("keydown",produce);
document.addEventListener("keydown",disappear);
document.addEventListener("keydown",settime);
for(var i=0;i<17;i++){
document.getElementById("constant").innerHTML +=getRandomChar();
}
function insertStr(soure,start, newStr){
  return soure.slice(0, start) + newStr + soure.slice(start)
}
function getRandomChar() {
    var r = Math.floor(Math.random() * 26);
    return String.fromCharCode(65 + r);
}
function produce(){
 var x=getRandomChar(); 
 var plus=document.getElementById("constant").innerText
document.getElementById("constant").innerHTML = insertStr(plus,6,x);
}
function disappear(e) {
  var keyCode = (window.event) ? e.which : e.keyCode;
   var del=document.getElementById("constant").innerText;
var n = String.fromCharCode(keyCode);
  if(n==del.substring(del.length-1, del.length)){
document.getElementById("constant").innerHTML=del.substring(0, del.length - 1);
    }
}
var lastInputTime = null;
function settime(){
var today = new Date().getTime();
 if(lastInputTime!=null){
  s=today-lastInputTime;
  for(var j=0;j<Math.floor(s/400);j++)
    {
      produce();
    }
}
lastInputTime=today;
}
