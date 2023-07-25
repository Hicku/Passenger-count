let count = 0;

let increaseCount = () => {
    count = count + 1
    countEl.innerHTML = count
}

let incButton = document.getElementById("increment-btn")
let countEl = document.getElementById("count-el")

incButton.addEventListener("click", increaseCount)

