const bird = document.getElementById("bird")
/** @type {HTMLCanvasElement} */
const ctx = bird.getContext('2d')
const birdImg = new Image
birdImg.src = "bird.png"

function draw() {
    birdImg.onload = () => {

        ctx.drawImage(birdImg , 150 , 150 , 100,100);
    }
}
addEventListener('DOMContentLoaded' , draw)