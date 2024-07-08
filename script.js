
let timer=60;
var rn=0;
let num=0;
let score = 0;


let life=3;
document.querySelector("#life").textContent=life;
 


 function bubblefomration() {
    let bottom ="";
    for (let i = 0; i <=241; i++) {
         num=Math.floor(Math.random()*10);
        bottom +=`<div class="bubble">${num}</div>`
        
    }
    
    document.querySelector(".bottom").innerHTML=bottom;
}


function Hitchange() {
 rn=Math.floor(Math.random()*10);
 document.querySelector("#hit").textContent=rn;

}



function time_change(){
   
   let time_interval= setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }else if(timer == 0){
            let gameover=`<h1>Game Over</h2>`;
            document.querySelector(".bottom").innerHTML=gameover;
        }
        
        
        else{
            clearInterval(time_interval);
        }
    },1000)
}


function increasescore() {
    score +=10;
    document.querySelector("#score").textContent=score;
}



function decreasescore() {
    score -=20;
    document.querySelector("#score").textContent=score;
}



document.querySelector(".bottom").addEventListener("click" , function  score_change(dets) {

    let goal = Number(dets.target.textContent);
    if(goal === rn){
        Hitchange();
        bubblefomration();
        increasescore();
    }else if(life>0)
    {
        life--
        decreasescore();
        document.querySelector("#life").textContent=life;
    }else if(life===0){
       
       let gameover=`<h1>Game Over</h2>`;
       document.querySelector(".bottom").innerHTML=gameover;
        timer=""
    }
    
} )

Hitchange();
bubblefomration();
time_change();