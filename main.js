for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".audiobutton")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        console.log(text);
        playaudio(text);
        playAnimation(text);
    });
}

document.addEventListener("keypress", function(event) {
    var text = event.key;
    playaudio(text);
    playAnimation(text);
})

function playaudio(txt) {
    switch (txt) {
        case 'a':
            var audio = new Audio("sounds/a.mp3");

            audio.play();
            break;
        case 'b':
            var audio = new Audio("sounds/b.mp3");
            audio.play();
            break;
        case 'c':
            var audio = new Audio("sounds/c.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function playAnimation(txt) {
    var anim = document.querySelector("." + txt);
    anim.classList.add("anim");

    setTimeout(function() {
        anim.classList.remove("anim");
    }, 500);
}

const add = (x, y) => {
    console.log(`The sum is : ${x+y}`);
}
add(10, 20);



var canves = document.getElementById("myCanvas");

var drawcanvas = canves.getContext("2d");

drawcanvas.lineWidth = 3;
drawcanvas.strokeStyle = "black";
drawcanvas.strokeRect(10, 10, 380, 280);

drawcanvas.fillStyle = "green";
drawcanvas.fillRect(12, 12, 376, 276);

var centerX = drawcanvas.width / 2;
var centerY = drawcanvas.height / 2;

drawcanvas.beginPath();
drawcanvas.arc(centerX, centerY, 75, 0, 2 * Math.PI, false);
drawcanvas.fillStyle = "red";
drawcanvas.fill();  
drawcanvas.stroke();




var myarray = [10, 20, 30, 40, 50, 60];
console.log(myarray);

myarray.forEach(function(x, index, arr) {
    arr[index] = x + 5;
});
console.log(myarray);