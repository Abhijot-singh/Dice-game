var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;

if(randomNumber1===1){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
   
}
if(randomNumber1===2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
    afterWards();
}
if(randomNumber1===3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
    
}
if(randomNumber1===4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
   
}
if(randomNumber1===5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
 
}
if(randomNumber1===6){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
   
}

if(randomNumber2===1){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
    
}
if(randomNumber2===2){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
  
}
if(randomNumber2===3){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
    
}
if(randomNumber2===4){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
   
}
if(randomNumber2===5){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png"); 
     
}
if(randomNumber2===6){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png"); 
}

    if(randomNumber1>randomNumber2){
        document.getElementById("heading").innerHTML = "Player 1 wins";
    }
    if(randomNumber1<randomNumber2){
        document.getElementById("heading").innerHTML = "Player 2 wins";
    }
    if(randomNumber1===randomNumber2){
        document.getElementById("heading").innerHTML  = "Draw";
    }
    







