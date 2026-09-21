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