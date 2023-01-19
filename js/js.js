let counter = 0
let key = "to-do-list"
let btn = document.getElementById("btn")
let inp = document.getElementById("inp")
let ul = document.getElementById("ul")
function x(text){
    k = ""
    for (let i = 0; i<text.length; i++){
        if(i%20===0 && i!==0){
            k+="\n"
        }
        k+=text[i]
    }
    return k
}

btn.addEventListener("click", () => {
    let li = document.createElement("li")
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.style.position = "fixed"
    checkBox.style.marginTop = "4px"
    let span = document.createElement("span")
    span.style.marginLeft = "30px"
    span.innerText = x(inp.value)
    let trash = document.createElement("button")
    trash.style.height = "20px"
    let img = document.createElement("img")
    img.src = "../img/158725.png"
    img.style.width = "10px"
    img.style.height = "10px"
    img.style.margin = "2px"
    img.style.position = "relative"
    img.style.top = "2px"
    trash.appendChild(img)
    trash.addEventListener("click", () => {
        ul.removeChild(li)
        let k = JSON.parse(localStorage.getItem(key))
        k.splice(Number(trash.name),1)
        localStorage.setItem(key,JSON.stringify(k))
    })
    li.appendChild(checkBox)
    li.appendChild(span)
    li.appendChild(trash)
    ul.appendChild(li)
    checkBox.id = counter
    trash.name = counter
    counter++
    checkBox.addEventListener("click", () => {
        let k = JSON.parse(localStorage.getItem(key))
        k[Number(checkBox.id)].checked = checkBox.checked
        localStorage.setItem(key, JSON.stringify(k))
    })
    if (!localStorage.getItem(key)) {

        let x = []
        let y = {"text": inp.value, "checked": false}
        x.push(y)
        localStorage.setItem(key, JSON.stringify(x))
    } else {
        let y = {"text": inp.value, "checked": false}
        let temp = JSON.parse(localStorage.getItem(key))
        temp.push(y)
        localStorage.setItem(key, JSON.stringify(temp))
    }
})

document.addEventListener("DOMContentLoaded", () => {
    let k = JSON.parse(localStorage.getItem(key))
    for (let i = 0; i < k.length; i++) {
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.innerText = x(k[i].text)
        span.style.marginLeft = "30px"
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.style.position = "fixed"
        checkBox.style.marginTop = "4px"
        let trash = document.createElement("button")
        trash.style.height = "20px"
        checkBox.checked = k[i].checked
        let img = document.createElement("img")
        img.src = "../img/158725.png"
        img.style.width = "10px"
        img.style.height = "10px"
        img.style.margin = "2px"
        img.style.position = "relative"
        img.style.top = "2px"
        trash.appendChild(img)
        li.appendChild(checkBox)
        li.appendChild(span)
        li.appendChild(trash)
        ul.appendChild(li)
        trash.addEventListener("click", () => {
            ul.removeChild(li)
            let k = JSON.parse(localStorage.getItem(key))
            k.splice(Number(trash.name),1)
            localStorage.setItem(key,JSON.stringify(k))
        })
        checkBox.id = counter
        counter++
        checkBox.addEventListener("click", () => {
            let k = JSON.parse(localStorage.getItem(key))
            k[Number(checkBox.id)].checked = checkBox.checked
            localStorage.setItem(key, JSON.stringify(k))
        })
    }
})

