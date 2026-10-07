let btn_toggle = document.getElementById("toggle")
btn_toggle.addEventListener("click", () => {
    console.log("btn pressed . . . .")
    let compo = document.getElementById("mini")
    compo.classList.toggle("bgcolor")

})

let btn_add = document.getElementById("Add")
btn_add.addEventListener("click", () => {
    console.log("btn pressed . . . .")
    let compo = document.getElementById("mini")
    compo.classList.add("added")

})


let btn_remove = document.getElementById("Remove")
btn_remove.addEventListener("click", () => {
    console.log("btn pressed . . . .")
    let compo = document.getElementById("mini")
    compo.classList.remove("added")

})


let btn_getuname = document.getElementById("getuname");
btn_getuname.addEventListener("click", () => {
    let uname = document.getElementById("uname")
    console.log(uname.value)
})
let btn_create = document.getElementById("create")

btn_create.addEventListener('click', () => {

    let new_comp = document.createElement('div');


    let container = document.getElementById("c3")
    new_comp.classList.add("mbox3")
    container.appendChild(new_comp);
    let new_comp_p1 = document.createElement('p')
    let new_comp_p2 = document.createElement('p')
    let new_comp_p3 = document.createElement('p')
    new_comp_p1.classList.add("paragraph")
    new_comp_p2.classList.add("paragraph")
    new_comp_p3.classList.add("paragraph")
    new_comp_p1.innerText = "This is paragraph";
    new_comp_p2.innerText = "This is paragraph";

    new_comp_p3.innerText = "This is paragraph";
    new_comp.id = "mb3";
    let mbox3 = document.getElementById("mb3");
    mbox3.append(new_comp_p1, new_comp_p2, new_comp_p3);

})