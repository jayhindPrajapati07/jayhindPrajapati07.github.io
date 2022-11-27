var random1=Math.floor((Math.random()*6)+1)
var random2=Math.floor((Math.random()*6)+1)
console.log(random1)
console.log(random2)
if(random1===1){
document.querySelector(".dice1").setAttribute("src","images/dice1.png")}else if(random1===2){
    document.querySelector(".dice1").setAttribute("src","images/dice2.png")
}else if(random1===3){
    document.querySelector(".dice1").setAttribute("src","images/dice3.png")
}else if(random1===4){
    document.querySelector(".dice1").setAttribute("src","images/dice4.png")
}else if(random1===5){
    document.querySelector(".dice1").setAttribute("src","images/dice5.png")
}else if(random1===6){
    document.querySelector(".dice1").setAttribute("src","images/dice6.png")
}


if(random2===1){
    document.querySelector(".dice2").setAttribute("src","images/dice1.png")}else if(random2===2){
        document.querySelector(".dice2").setAttribute("src","images/dice2.png")
    }else if(random2===3){
        document.querySelector(".dice2").setAttribute("src","images/dice3.png")
    }else if(random2===4){
        document.querySelector(".dice2").setAttribute("src","images/dice4.png")
    }else if(random2===5){
        document.querySelector(".dice2").setAttribute("src","images/dice5.png")
    }else if(random2===6){
        document.querySelector(".dice2").setAttribute("src","images/dice6.png")
    }

if(random1>random2){
    document.querySelector("h1").textContent="Player1 Wins!!!"
    document.querySelector(".imgg").style.visibility="visible"
}else if(random1<random2){
    document.querySelector("h1").textContent="Player2 Wins!!!"
    document.querySelector(".imgg2").style.visibility="visible"
}else{
   
    document.querySelector("h1").textContent="<<!!!Draw!!!>>"

}
    
