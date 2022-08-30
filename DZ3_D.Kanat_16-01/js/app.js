const tab = document.querySelectorAll(".tabheader__item")
const tabParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tab.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 1) => {
    tabContent[i].style.display = "block"
    tab[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

tabParent.addEventListener("click", (event) => {
    const target = event.target
    if (target.classList.contains("tabheader__item")) {
        tab.forEach((item, i) => {
            if (target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

let slide = 0

function slides(n) {
    if (n > tab.length && n > tabContent.length) {
        slide += 1
    } else if (n < 0) {
        slide = tab.length && slide == tabContent.length
    }
    for (let i of tab) {
        i.classList.remove("tabheader__item_active")
    }
    tab[n].classList.add("tabheader__item_active")
    for (let i of tabContent) {
        i.style.display = "none"
    }
    tabContent[slide].style.display = "block"
}

setInterval(() => {
    slide++
    if (slide >= 4) {
        slide = 0
    }
    slides(slide)
}, 3000)


const modal = document.querySelector(".modal")
const modalActive = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")


const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}
const closeModal = () => {
    modal.classList.remove("show")
    modal.classList.add("hide")
    document.body.style.overflow = ""
}

modalActive.addEventListener("click", openModal)

closeModalBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal()
    }
})

document.body.addEventListener("keydown", (event) => {
    if (event.code === "Escape")
        closeModal()
})


window.addEventListener("scroll", () => {
    if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        openModal()
    }
    console.log(window.pageYOffset)
})