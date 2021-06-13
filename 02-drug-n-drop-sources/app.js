const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover) // над
    placeholder.addEventListener('dragenter',dragenter) //на территорию
    placeholder.addEventListener('dragleave',dragleave) //вышли с территориии
    placeholder.addEventListener('drop',dragdrop) //когда отпустили
}

function dragstart(event) {
    // console.log('dragstart',event.target);
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    },0)
    

}

function dragend(event) {
    // event.target.classList.remove('hold','hide')
    event.target.className = 'item'

}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hoverd')
    
}

function dragleave(event) {
    event.target.classList.remove('hoverd')
}

function dragdrop(event) {
    event.target.classList.remove('hoverd')
    event.target.append(item)
}