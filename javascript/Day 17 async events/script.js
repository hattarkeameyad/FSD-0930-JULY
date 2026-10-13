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

let c2 = document.getElementById("c2");
//keypress event

document.addEventListener('keydown', (event) => {
    console.log(event.key)
    c2.style.backgroundColor = "#123456"
    switch (event.key) {
        case "ArrowLeft":
            c2.style.transform = "translateX(-150px)";
            break;
        case "ArrowRight":
            c2.style.transform = "translateX(150px)";

            break;
        case "ArrowUp":
            c2.style.transform = "translateY(-150px)";

            break;
        case "ArrowDown":
            c2.style.transform = "translateY(150px)";

            break;
    }
})

let txt_chat = document.getElementById("chat")

txt_chat.addEventListener("input", () => {
    setTimeout(() => {
        document.getElementById("userop").innerText = ""
    }, 1000)
    document.getElementById("userop").innerText = "The User is Typing . . . "
})

txt_chat.addEventListener("change", () => {
    console.log("You have lost the focus  . . . . ");

    alert("Please dont go stay here ..")

})

let form_f=document.getElementById("form")
form_f.addEventListener('submit', (event) => {
    alert("Your form is now submitted . . . .")
    event.preventDefault();
})

txt_chat.addEventListener('focus',()=>{

    txt_chat.classList.add("large")
      setTimeout(() => {
            txt_chat.classList.remove("large")

    }, 2000)
    
})

window.addEventListener("load",()=>{
    console.log("The window is now loaded . .. ")
})

window.addEventListener("scroll",()=>{
    console.log("TYou are scrolling . . . . . ")
})

window.addEventListener("resize",()=>{
    console.log("size of the window is changed now  , , , , ")
})
