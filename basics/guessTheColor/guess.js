const colorcontainer = document.getElementById("color-code")
const options = document.getElementById("options-container")
const scoreContainer = document.getElementById('score')
let score = 0;
let randomColor = null

function generateRandomIntBetween(min,max) {
    return min + Math.floor(Math.random() * (max-min +1))
}

function generateRandomColor() {
    let r = generateRandomIntBetween(0,255)
    let g = generateRandomIntBetween(0,255)
    let b = generateRandomIntBetween(0,255)
    return `rgb(${r}, ${g}, ${b})`
}

function incrementScore() {
    score+=1;
    scoreContainer.innerText = score;
}

function validateResult(el) {
    const selectedColor = el.target.style.backgroundColor;
    if(selectedColor === randomColor){
        incrementScore()
    } else{
        score = 0
    }
    window.localStorage.setItem('score',score )
    startgame()
}

function startgame() {
    options.innerHTML = null;
    score = Number(window.localStorage.getItem('score')) ?? 0
    scoreContainer.innerText = score;
    randomColor = generateRandomColor();
    colorcontainer.innerText = randomColor;

    const ansIndex = generateRandomIntBetween(0,5)

    for(let i = 0 ; i < 6; i++ ){
        const div = document.createElement('div')
        div.addEventListener('click', validateResult)
        div.style.backgroundColor = 
        i === ansIndex? randomColor : generateRandomColor();
        options.append(div);
    }
}

window.addEventListener('load' , () => startgame() )