const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = {    
        'base':['#88251d','#e06925','#1d5969','#ffcc02','#25a85b'],
        'lite':['#ad372f','#ff9152','#246e82','#fcff3d','#34d176'],
        'dark':['#7d221b','#a84811','#144857','#e39700','#239151']    
}
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click',event=>{
    if(event.target.classList.contains('time-btn')){
        screens[1].classList.add('up')
        time = parseInt(event.target.getAttribute('data-time'));
        startGame();
    }
})

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {   
    setInterval(decreaseTime,1000) 
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0){
        finishGame()
    }else{
        let current = --time
        if(current < 10)
            current = `0${current}`
        setTime(current)
    }
    
}

function setTime(value) {
    if(value === 60)
        timeEl.innerHTML = `01:00`
    else
        timeEl.innerHTML = `00:${value}`        
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class='primary'>${score} </span></h1>`
    
} 

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width, height} = board.getBoundingClientRect()    
    const x = getRandomNumber(0,width - size)
    const y = getRandomNumber(0, height - size)
    const colorRand = getRandomColor()    

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = `linear-gradient(90deg, ${colorRand[0]} 0%, ${colorRand[1]} 47%, ${colorRand[2]} 100%)`

    board.append(circle)
}

function getRandomNumber(min,max){
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const rand = Math.floor(Math.random() * colors.base.length)    
    return [colors.lite[rand],colors.base[rand],colors.dark[rand]]
}