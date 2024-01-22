//create a variable for the button which will be the initial main functionality
const button = document.querySelector('#add')
//creat variable for unordered list
const ol = document.querySelector('ol')
//crate an event listener which calls a function when the button is clicked
button.addEventListener('click', addItem)

//define the function that adds what the user typed in as a task to a list item then append that list item to the list
//this function builds a list item, which will hold buttons so their functionality will also be within this function
function addItem(){
    //save user input task
    const userTask = document.querySelector('input').value
    //create list item using user input
    let li = document.createElement('li')
    //create a span element which will hold user task text
    let span = document.createElement('span')
    span.textContent = userTask
    //add that span to the list item
    li.appendChild(span)

    //create buttons at the bottom of the list item to add functionality of editing them or deleting them;
    //edit span text button
    let editTask = document.createElement('button')
    editTask.textContent = 'Edit'
    li.appendChild(editTask)

    //More buttons for moving tasks up or down the list, maybe even move them to the top or end of the list in one action
    // let moveTop = document.createElement('button')
    // moveTop.textContent = "Top"
    // li.appendChild(moveTop)
    // moveTop.addEventListener('click', moveToTop)
    // function moveToTop(){
    //     //change the li value attribute to 0 or order to 1 in css; to display it first
    //     let current = (this.parentNode)
    //     //flexbox order
    //     document.querySelector('li').style.order = 0
        
    // }
    // //I couldn't find what I specifically wanted to do to list items moving to the top or bottom of a ul or ol yet, I will come back and finish this at a later time


    //delete list item button; is after the relocation buttons for usability purposes
    let deleteTask = document.createElement('button')
    deleteTask.textContent = 'Delete'
    li.appendChild(deleteTask)
    //event listener on edit button and declaration of edit button
    editTask.addEventListener('click', changeTask)
    function changeTask(){
        let newTask = prompt('What would you like to change this to? ')
        span.innerText = newTask
    }
    //event listener on delete button and declaration of delete button
    deleteTask.addEventListener('click', removeTask)
    function removeTask(){
        let userResponse = prompt("Are you sure you want to delete this task? ")
        if(userResponse.toLowerCase()==='yes'){
            ol.removeChild(this.parentNode)
            //This first selected the ol then said to remove a child from it, when we pass it this.parentNode, this referese to the scope of this if statement, its parent referese to the function, this in that specific usage is targeting the li the button is inside; console.log(this.parentNode) output confirmed it was the li where the button was pressed
        }
    }







    //add list item to unordered list
    ol.appendChild(li)


    //wipe user task entry field
    document.querySelector('input').value = ''
}
//create functionality for wiping the entire list
let wiper = document.querySelector("#wipe")
wiper.addEventListener('click', deleteAll)
function deleteAll(){
    let deleteReply = prompt("Are you sure you want to wipe you're entire list?")
    if(deleteReply.toLowerCase() == 'yes'){
        ol.innerText = ''
    }
}

//later add localStorage to this app instead of it existing just in the dom



