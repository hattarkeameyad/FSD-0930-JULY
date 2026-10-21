async function loadquote() {
    try {
        const res = await fetch("https://dummyjson.com/quotes/random")
        const obj = await res.json()
        document.getElementById('quote').innerText = obj.quote;
    }
    catch (err) {
        console.log(err)
    }
}
document.getElementById('load').addEventListener('click', () => {

    loadquote();
})