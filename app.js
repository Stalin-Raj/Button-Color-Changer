function buttonChanger(choice){
  console.log(choice.value);
  var red=document.getElementById("button-red").setAttribute("class",choice.value);
  var blue=document.getElementById("button-blue").setAttribute("class",choice.value);
  var yellow=document.getElementById("button-yellow").setAttribute("class",choice.value);
  var green=document.getElementById("button-green").setAttribute("class",choice.value);
  
}