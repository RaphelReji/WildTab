const wallpaper=document.getElementById("wallpaper");
wallpaper.src = "assets/wallpaper2.mp4";

function updateClock(){
    const now=new Date();
    const time=now.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });
    document.querySelector("#clock").textContent=time;
}
updateClock();
setInterval(updateClock,1000);

function updateDate(){
    const now=new Date();
    const date=now.toLocaleDateString([],{
        weekday:"long",
        month:"long",
        day:"numeric"
    });
    document.querySelector("#date").textContent=date;
}
updateDate();


function updateGreeting(){
    const hour=new Date().getHours();
    let greetings;
    if(hour<12){
        greetings="Good morning";
    }
    else if(hour<16){
        greetings="Good afternoon";
    }
    else if(hour<20){
        greetings="Good evening";
    }
     else{
        greetings="Good night";
    }
    document.querySelector("#greetings").textContent=greetings;
}
updateGreeting();

const form= document.querySelector("#search-form");
const search=document.querySelector("#search");
form.addEventListener("submit",function(event){
        event.preventDefault();

    const query = search.value.trim();

    if (!query) return;

    window.location.href =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);

});


document.addEventListener("keydown", function(event) {

    if (event.key === "6") {

        wallpaper.src="assets/wallpaper.mp4";
    }
    else if(event.key==="7"){
         wallpaper.src="assets/wallpaper2.mp4";
    }
});

const settingsBtn=document.getElementById("settings-icon");
const settingsWindow=document.getElementById("settings-window");
settingsBtn.addEventListener("click",function(){
      if (settingsWindow.style.display==="block") {

        settingsWindow.style.display="none";
    }
    else{
        settingsWindow.style.display="block";
    }
});

const forestBg=document.getElementById("forest-bg-settings")
const lakebg=document.getElementById("lake-bg-settings")

forestBg.addEventListener("click",function(){
    wallpaper.src="assets/wallpaper.mp4";
});

lakebg.addEventListener("click",function(){
   wallpaper.src="assets/wallpaper2.mp4";
});

const forestSong=document.getElementById("forest-song");
const playSong=document.getElementById("play-btn");
const pauseSong=document.getElementById("stop-btn");
playSong.addEventListener("click",function(){
    forestSong.play();
});
pauseSong.addEventListener("click",function(){
    forestSong.pause();
});
const dangerIcon=document.getElementById("danger-icon");
const hackWindow=document.getElementById("hack-window");
dangerIcon.addEventListener("click",function(){
    if (hackWindow.style.display==="block") {

        hackWindow.style.display="none";
    }
    else{
        hackWindow.style.display="block";
    }
});

const yt=document.getElementById("icons-card-yt");
const claude=document.getElementById("icons-card-claude");
const chatgpt=document.getElementById("icons-card-chatgpt");
const hcCard=document.getElementById("icons-card-hc");
const searchForm=document.getElementById("search-form");
const iconCard=document.querySelector("icons-card");
const body=document.getElementById("body");
const hackMsg=document.getElementById("hacking-msg");
const hackBtn=document.getElementById("hack-btn");
hackBtn.addEventListener("click",function(){
 setTimeout(() => {
    hackMsg.textContent="hacking "
}, 1000);   
   

setTimeout(() => {
    hackMsg.textContent="hacking mode  "
}, 2000);


setTimeout(() => {
    hackMsg.textContent="hacking mode activating "
}, 3000);

setTimeout(() => {
    hackMsg.textContent="Activated "
    hackWindow.style.display="none";
}, 4000);


setTimeout(() => {
    wallpaper.style.display= "none"
    body.style.color="green"
    searchForm.style.background="rgba(61, 255, 2, 0.31)";
    chatgpt.style.display="none";
    yt.style.display="none";
    claude.style.display="none";
    hcCard.style.background="rgba(75, 216, 9, 0.45)";
}, 4500);

});