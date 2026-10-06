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


let btn_getuname=document.getElementById("getuname");
btn_getuname.addEventListener("click",()=>{
    let uname=document.getElementById("uname")
    console.log(uname.value)
})