const board = document.querySelector('#board')
const SQUARES_NUMBER = 600
// const colors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71']
const colors = ['#88251d','#e06925','#1d5969','#ffcc02','#66ddd9','#25a85b']
const sounds = ['sound/do.mp3','sound/re.mp3','sound/mi.mp3','sound/fa.mp3','sound/sol.mp3','sound/lja.mp3','sound/si.mp3',] 

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=>{
        setColor(square);
        soundRundom();
    })

    square.addEventListener('mouseleave',()=>{
        removeColor(square);
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color 
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
    board.style.boxShadow = `0 0 2px ${color},0 0 100px ${color}`
    board.style.transition = '0.6s ease'
}

function removeColor(element) {
    element.style.background='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    board.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function soundRundom() {
    const index = Math.floor(Math.random() * sounds.length)
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = sounds[index]; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }