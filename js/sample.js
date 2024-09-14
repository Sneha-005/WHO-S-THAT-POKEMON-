function runCheck(){
  var data= document.getElementById("name").value;
  if(data=="amoonguss"){
      location.replace("amoongus.html");
  }
  else{
      location.replace("loss.html");
  }
}