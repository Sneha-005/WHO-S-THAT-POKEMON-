function runCheck(){
  var data= document.getElementById("name").value;
  if(data=="wailord"){
      location.replace("wailord.html");
  }
  else{
      location.replace("loss.html");
  }
}
