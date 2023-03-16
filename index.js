document.body.firstElementChild.innerHTML += " javascript"

let h2 = document.createElement("h2")

let text = document.createTextNode("this is h2")

document.body.appendChild(h2)
h2.appendChild(text)

console.log(h2)
console.log(text)
