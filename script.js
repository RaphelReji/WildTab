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
        greetings="Good morning";
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
