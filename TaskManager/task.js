let btn = document.getElementById("button-addon2")
let parentlist = document.getElementById('parentlist')
btn.addEventListener("click", AddChapter)
function AddChapter(e)
{
    let currentInput = btn.previousElementSibling
    if (currentInput.value == "") {
        
    } else {
        if (parentlist.firstElementChild.className.includes('newmsg')) {
            parentlist.firstElementChild.remove()
        }
        let innervalue = currentInput.value
        let newLi = document.createElement("li")
        newLi.className = "list-group-item d-flex justify-content-between mt-2"
        newLi.innerHTML = `<h3 class="flex-grow-1">${innervalue}</h3>
    <button class="btn btn-warning mx-3" onclick="EditTask(this)">Edit</button>
    <button class="btn btn-danger" onclick="RemoveTask(this)">Remove</button>`


        parentlist.appendChild(newLi)
    }
}
function RemoveTask(currElement) {
    currElement.parentElement.remove()
    if (parentlist.children.length <= 0)
    {
        let newmsg = document.createElement("h3")
        newmsg.textContent = "No Tasks Available !"
        newmsg.className = "newmsg text-white d-flex justify-content-center mt-3"
        parentlist.appendChild(newmsg)
            
        }
}
function EditTask(currElement) {
    if (currElement.textContent == "Done") {
        currElement.textContent = "Edit"
        let currtaskvalue = currElement.previousElementSibling.value
        let currheading = document.createElement('h3')
        currheading.className = "flex-grow-1"
        currheading.textContent = currtaskvalue
        currElement.parentElement.replaceChild(currheading, currElement.previousElementSibling)
    }
    else {
        currElement.textContent = "Done"
        let currtaskname = currElement.previousElementSibling.textContent
        let currinput = document.createElement("input");
        currinput.type = "text"
        currinput.placeholder = "Task Name"
        currinput.className = "form-control"
        currinput.value = currtaskname
        currElement.parentElement.replaceChild(currinput, currElement.previousElementSibling)
    }
}