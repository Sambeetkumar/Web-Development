console.log("it's working")
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.children)
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)
let UlTag = document.body.children[1]
let FirstLi = UlTag.children[0]
let SecondLi = UlTag.children[1]
console.log(SecondLi.previousElementSibling.textContent)
let TableVar = document.body.children[2]
console.log(TableVar.tBodies[0].rows[1].cells[0].textContent)
console.log(TableVar.tHead.rows[0].cells[1].textContent)
console.log(table.getAttribute("data"))
let btn = document.getElementById("btn")
function notify(id) {
    let x = prompt("enter something")
    btn.textContent = x
}