var kilogramInput=document.getElementById("kilogram");
var poundInput=document.getElementById("pounds");
var ounceInput=document.getElementById("ounces");


kilogramInput.addEventListener("input",function(){
 
  poundInput.value=((kilogramInput.value)*2.2046).toFixed(4);
  ounceInput.value=((kilogramInput.value)*35.274).toFixed(4);
})


poundInput.addEventListener("input",function(){

  kilogramInput.value=((poundInput.value)/2.2046).toFixed(4);
  ounceInput.value=((poundInput.value)*16).toFixed(4);
})


ounceInput.addEventListener("input",function(){
  
  poundInput.value=((ounceInput.value)/16).toFixed(4);
  kilogramInput.value=((ounceInput.value)/35.274).toFixed(4); 
})


document.getElementById("button").addEventListener("click",function(){
  kilogramInput.value="";
  poundInput.value="";
  ounceInput.value="";
})
