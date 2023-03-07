const canvas = document.querySelector('canvas')
const secondsCount = document.querySelector('.seconds')
const context = canvas.getContext('2d')
const iceDragonDimensions = {width: 750, height: 750}

const startTime = Date.now()

canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.translate(window.innerWidth / 2, window.innerHeight / 2)

const image = new Image()
image.src = './assets/ice-dragon1.png'

const loopingIceDragons = 50
const offsetDistance = 250
let currentOffset = 0

image.onload = () => {
    startLooping()
}

function draw(offset) {
    context.drawImage(
        image,
        -iceDragonDimensions.width / 2 - offset / 2,
        -iceDragonDimensions.height / 2 - offset / 2,
        iceDragonDimensions.width + offset,
        iceDragonDimensions.height + offset
    )
}

function loopDraw() {
    for(let i = loopingIceDragons; i >= 0; i --) {
        draw(i * offsetDistance + currentOffset)
    }

    draw(offsetDistance)

    currentOffset++
    if (currentOffset >= offsetDistance) {
        currentOffset = 0
    }

    const newTime = Math.floor((Date.now() - startTime) / 1000)

    secondsCount.innerText = newTime

    requestAnimationFrame(loopDraw)
}

function startLooping() {
    requestAnimationFrame(loopDraw)
}