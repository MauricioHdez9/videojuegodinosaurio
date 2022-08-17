const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop");
let scoreintervalId
let score= 0; 
document.addEventListener("click",function () {
    player.classList.add("playerJump");
})  


player.addEventListener('animationend',() => {
    player.classList.remove("playerJump");
});


//---- boton de pausa ---------------------------------------------------------------------------------------- 
function stopanimation()
{
    cactus.style.animationPlayState = 'paused'
    player.style.animationPlayState = 'paused'
    background.style.animationPlayState ='paused'
     

}
function stopscore()
{
    clearInterval(scoreintervalId)
    clearInterval(scoreintervalId)

}
function resumencore()
{
    scoreintervalId = setInterval(()=>
    {
        score++
        document.getElementById("score").innerText = score

    },1000)


}
function pausegame()
{
    stopscore();
    stopanimation();
    stopscore();
    
    
     
     
}
function resumengame()
{
    resumencore();
     cactus.style.animationPlayState = 'running'
     player.style.animationPlayState = 'running'
     background.style.animationPlayState ='running'
    //  resumencore();
     
}


buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")) {
        resumengame();
    } 
    else {
        
        pausegame();
    }
    buttonPlayStop.classList.toggle("play");
})

//---- score ---------------------------------------------------------------------------------------- 

scoreintervalId = setInterval(()=>
{
    score++
    document.getElementById("score").innerText = score

},1000)

