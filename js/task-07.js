const inputRef = document.querySelector("#font-size-control")
const textSize = document.querySelector("#text")

inputRef.addEventListener("input", (event) => {
    
    textSize.style.fontSize = `${event.currentTarget.value}px`
})