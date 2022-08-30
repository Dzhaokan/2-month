const block = document.querySelector(".block")

let position = 0;
let topPosition = 0;

const move = () => {
    if (position < 450 && topPosition == 0) {
        position += 10
        block.style.left = `${position}px`
        setTimeout(move, 100)
    } else if  (position == 450 && topPosition < 450) {
        topPosition += 10
        block.style.top = `${topPosition}px`
        setTimeout(move, 100)
    } else if (position > 0 && topPosition == 450) {
        position -= 10
        block.style.left = `${position}px`
        setTimeout(move, 100)
    } else if (position == 0 && topPosition > 0) {
        topPosition -= 10
        block.style.top = `${topPosition}px`
        setTimeout(move, 100)
    } else {
        return;
    }
}
move()

let timer = 0

setInterval(() => {
    timer++
    console.log(timer)
}, 1000)