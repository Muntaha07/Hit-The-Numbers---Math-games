var timer =30;
var Score = 0;
var hitrn =0;


function increasescore() {
    Score += 10;
    document.querySelector("#Scoreval").textContent = Score;
}

function getnewhit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function bubble() {
    var clutter = "";

for (var i = 0; i <=140; i++) {
   var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    
    
}

document.querySelector('#pbottom').innerHTML = clutter;
}

function runtimer() {
  var timerint =  setInterval(function () {
        if (timer>0) {
            
            timer--;
            document.querySelector('#timervalue').textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over </h1>`
        }

    }, 1000);
        
    
}


// document.querySelector("#pbottom").addEventListener("Click", function (detail){
//     var clickednum = Number (detail.target.textContent);
//     if(clickednum === hitrn){
//         increasescore();
//         bubble();
//         getnewhit();
//     }
// })

document.querySelector("#pbottom")
    .addEventListener("click", function (detail) {
        var clickednum = Number(detail.target.textContent);
        if (clickednum === hitrn) {
            increasescore();
            bubble();
           getnewhit();
        }
    });


getnewhit();
runtimer();
bubble();



