const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const image = new Image()
image.src = './assets/ice-dragon.png'

image.onload = () => {
    draw()
}

function draw() {
    context.drawImage(image, 0, 0, 143, 167)
}