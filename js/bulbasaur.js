function runCheck(){
  var data= document.getElementById("name").value;
  if(data=="bulbasaur"){
      location.replace("bulbasaur.html");
  }
  else{
      location.replace("loss.html");
  }
}
