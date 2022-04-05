document.addEventListener("keydown",produce);
document.addEventListener("keydown",disappear);
document.addEventListener("keydown",settime);
for(var i=0;i<17;i++){
document.getElementById("constant").innerHTML +=getRandomChar();
}/*初始賽道*/
function insertStr(soure,start, newStr){
  return soure.slice(0, start) + newStr + soure.slice(start)
}/*從左插入*/
function getRandomChar() {
    var r = Math.floor(Math.random() * 26);
    return String.fromCharCode(65 + r);
}/*隨機字母*/
function produce(){
 var x=getRandomChar(); 
 var plus=document.getElementById("constant").innerText
document.getElementById("constant").innerHTML = insertStr(plus,6,x);
}/*固定製造*/
function disappear(e) {
  var keyCode = (window.event) ? e.which : e.keyCode;
   var del=document.getElementById("constant").innerText;
var n = String.fromCharCode(keyCode);
  if(n==del.substring(del.length-1, del.length)){
document.getElementById("constant").innerHTML=del.substring(0, del.length - 1);
    }
}/*從右消失*/
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
}/*每秒2.5個字*/
