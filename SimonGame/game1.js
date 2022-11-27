var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;


$("document").keypress(nextSequence());
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    //console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $("#"+randomChosenColor).fadeOut().fadeIn(),500;

    playSound(randomChosenColor);
    animatePress(randomChosenColor);

    level=level+1;
    //console.log(level)
    $("h1").text("Level: "+level);

    
}

$(".btn").click(function(){
    //console.log(this.id);
    var userChosenColor= $(this).attr("id");
    $("#"+userChosenColor).fadeOut().fadeIn(),500;

    playSound(userChosenColor);
    animatePress(userChosenColor);

    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});

function playSound(name){
    var audio1= new Audio("sounds/"+name+".mp3");
    audio1.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColor).removeClass("pressed");
    }, 100); 
}






