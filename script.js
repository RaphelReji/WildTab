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