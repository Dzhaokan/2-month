const passpInput = document.querySelector(".passpInput");
const passpCheck = document.getElementsByClassName("passpCheck");
const passpResult = document.querySelector(".passpResult");

const passpValidate = /^([0,1]{1}[0-9]{13})$/

passpCheck[0].addEventListener("click", () => {
  if (passpValidate.test(passpInput.value)) {
    passpResult.innerText = "ok";
    passpResult.style.color = "green";
  } else {
    passpResult.innerText = "not  ok";
    passpResult.style.color = "red"
  }
});

const block = document.querySelector(".block")

let position = 0


const move = () => {
  document.addEventListener("click", move)
    if (position < 440) {
      position += 16
      block.style.left = `${position}px`
    }else {
      position = 0
    }

}
move()