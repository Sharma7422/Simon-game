let gameseq=[];
let userseq=[];
let high=0;

let btns=["pink","oranged","purple","blue"];


let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game is Started");
        started = true;
    }

    levelup();
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    useraudio();
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
    userseq=[];
    level++;

    h2.innerText=`Level ${level}`;

    if(high<level)
    {
        high=level;
    }


    //random btn choose

    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randBtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtn);
}


function checkans(Idx){
    if(gameseq[Idx] === userseq[Idx])
    {
        if(userseq.length === gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        h2.innerHTML=`Game Over! Your Score was  <b>${level}</b> <br> Highest Score is <b> ${high}<b> <br> Press any key to start` ;
        gameaudio();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkans(userseq.length-1);
}

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns)
{
btn.addEventListener("click", btnPress);
}



function reset(){
    started==false;
    gameseq=[];
    userseq=[];
    level=0;
}

 let gameFlashaudio="notification.wav";
 function gameaudio(){
    let audio=new Audio(gameFlashaudio);
    audio.play();
 }

 let userFlashaudio="mixkit-gaming-lock-2848.wav";
 function useraudio(){
    let audio=new Audio(userFlashaudio);
    audio.play();
 }
