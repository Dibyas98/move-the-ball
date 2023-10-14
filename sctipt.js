let ball=document.querySelector(".ball")
console.log(ball);
document.addEventListener("keydown",moveball);
let topp=0, left=0;

function moveball(event){
    let browserhight=document.documentElement.clientHeight;
    let browserWidth=document.documentElement.clientWidth;
    let elementwidth=ball.offsetWidth;

    let key=event.keyCode;
    console.log(key);
    //  for > and d
    if(key==68 || key==39){
        if(left+elementwidth+10<=browserWidth-10){
            ball.style.left=left+10+"px";
        left+=10;
        }
        
    }
    // for 
    if(key==83 || key==40){
        if(topp+elementwidth+10<browserhight-10){
            ball.style.top=topp+10+"px";
        topp+=10;
        }
        
    }

    if(key==87|| key==38){
        if(topp-10>5){
            ball.style.top=topp-10+"px";
        topp-=10;
        }
        
    }
    if(key==65 || key==37){
        if(left-10>5){
            ball.style.left=left-10+"px";
        left-=10;
        }
        
    }
    ball.classList.add("ani");
    setTimeout(() => {
        ball.classList.remove("ani")
    }, 400);
    
}