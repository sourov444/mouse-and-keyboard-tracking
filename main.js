

const key = document.querySelectorAll(".key");
const lClick = document.querySelector(".l-click");
const rClick = document.querySelector(".r-click");



document.addEventListener('keydown', trackKey);
document.addEventListener('keyup', releasekey);
document.addEventListener("mousedown", trackmouse);
document.addEventListener("mouseup", releasemouse);
document.addEventListener("contextmenu", disableMouse);



function trackKey(e){

for (let i = 0; i < key.length; i++){

    if(e.keyCode == key[i].dataset.keyCode){

        key[i].style.background = "rgba(255,255,255,0.2)";

    }
}


};


function releasekey(){

    for (let i = 0; i < key.length; i++){

       
        key[i].style.background = "transparent";
 
    }

};


function trackmouse(e) {

    e = e || window.event;
    switch(e.which){
     case 1: lClick.style.background = "rgba(255 , 255 , 255 , 0.2)";
     break;
    case 3: rClick.style.background = "rgba(255,255,255,0.2)";
    break;

    }

};


function releasemouse(){

    rClick.style.background = "transparent";

    
    lClick.style.background = "transparent";
    


};

function disableMouse(e){
    e.preventDefault();
    return false;
}







