function openInvitation(){

document.getElementById("cover")
.style.display="none";


let audio=document.getElementById("music");

audio.play();


window.scrollTo({

top:0,

behavior:"smooth"

});


}




// membaca nama dari link

let params=new URLSearchParams(
window.location.search
);


let name=params.get("to");


if(name){

document.getElementById("guest")
.innerHTML=name;

}