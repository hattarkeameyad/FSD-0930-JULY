let btn_change = document.getElementById("Change");

let paragraphs = document.getElementsByTagName("p");


console.log(paragraphs)
btn_change.addEventListener('click', () => {
    for (let value of paragraphs) {
        console.log(value)
        value.style.backgroundColor = "#ffaaee"
    }
})