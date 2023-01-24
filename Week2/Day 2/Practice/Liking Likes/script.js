var count = 3;
var countElement= document.querySelector(".likes");

function addlike(){
    count++;
    countElement.innerText = count +" like(s)";
}