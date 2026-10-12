let clickbtn = document.getElementById("click_dblclic");
let cb = document.getElementById("c1")

clickbtn.addEventListener('click', () => {
    cb.style.backgroundColor = "#33fc01";
})


clickbtn.addEventListener('dblclick', () => {
    cb.style.backgroundColor = "#7acdf3";
})

cb.addEventListener('mouseover', () => {
    cb.style.backgroundColor = "#e4a99d"
    cb.classList.add("transition")
})

cb.addEventListener('mouseout', () => {
    cb.style.backgroundColor = "#b0f70d"
    cb.classList.remove("transition")
    cb.classList.remove("rotate")
    cb.classList.remove("translate")

    

})

cb.addEventListener("mousedown", () => {
    cb.style.backgroundColor = "#2180ba"
    cb.classList.add("rotate")
})

cb.addEventListener("mouseup", () => {
    cb.style.backgroundColor = "#e81010"
    cb.classList.add("translate")
})


