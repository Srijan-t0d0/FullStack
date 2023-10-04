const canvas = document.getElementById("canvas")
/** @type {HTMLCanvasElement} */
const ctx = canvas.getContext('2d')
const birdImg = new Image
birdImg.src = "bird.png"

const birdobj = {
    vy: 5,
    px: 250,
    py: 500,
    sx: (canvas.width * .025),
    sy: (canvas.width * .025),

    draw() {
            ctx.drawImage(birdImg , this.px , this.py , birdImg.width/this.sx,birdImg.height/this.sy);
        },
    
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    birdobj.draw();
    birdobj.py +=birdobj.vy;

    if (birdobj.vy < 8){

        birdobj.vy += 0.5;
    }
    //window.requestAnimationFrame(draw);
    }

function playerinput() {
        birdobj.vy = -15
}
    
function start () {
    setInterval(draw , 12)
}
console.log(birdImg.height)

addEventListener('DOMContentLoaded' , start)
addEventListener('click' , playerinput)