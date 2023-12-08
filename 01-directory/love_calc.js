function getInputValue(){
  var name1 = document.querySelectorAll('.name')[0].value;
  var name2 = document.querySelectorAll('.name')[1].value;
 
  var name = Math.random();
  name = name * 100;
  name = Math.floor(name) + 1;
   
  if (name === 1 && name < 30){
    document.querySelector("img").src = ""
  }

  else if (name === 31 && name < 60){
    document.querySelector("img").src = "./white_dance.jpg"
  }

  else {
    alert("greter");
  }
}