//Create variables that refer to the buttons of the app
let add = document.querySelector('#add')
let wipe = document.querySelector('#wipe')
//create a variable that points at the input field so we can save text input
let userInputArea = document.querySelector('input')
//create a variable that points to the list element
let ol = document.querySelector('ol')

//function that gets the tasks value from localStorage and converts it into an array
function getTasksArray(){
    return JSON.parse(localStorage.getItem('tasks'))
}
//create a function to set a base array value for the 'tasks' key
function createTasks(){
    localStorage.setItem('tasks', '[]')
}

//define a function to check the 'tasks' value
function checkForTasks(){
    return localStorage.getItem('tasks') ? true : false;
}


//function for saving an argument array as the value to the tasks key in localstorage
function saveTasks(arr){
    localStorage.setItem('tasks', JSON.stringify(arr))
}

//At page load to create in localStorage a key of 'tasks' which will be an  array of items. So this code will build the key if one doesn't already exist.
if(!checkForTasks()){
    createTasks()
}
//otherwise call on displayItems(), which will display list items for each value in the array that is held by 'tasks'
if(checkForTasks()){
    let tasks = getTasksArray()
    tasks.forEach(task=>displayItem(task))

}





//buildItem which is called when add to list is clicked
function buildItem(){
    //conditional that checks whether there is any input when the 'add to list' button is clicked, alerts user to enter input, otherwise continues below to build a task
    if(!userInputArea.value){
        document.querySelector('h2').removeAttribute('hidden')
        document.querySelector('h2').innerText = 'Task needs to be atleast one character in length'
        document.querySelector('h2').style.color = 'red'
        setTimeout(()=>document.querySelector('h2').setAttribute('hidden',true), 3000)
    }else{
        //create a variable that holds the user input
        let userEntry = userInputArea.value
        //populate a variable equal to the current tasks array
        let userTasks = getTasksArray()
        //add in the user value
        userTasks.push(userEntry)
        //save to the localStorage
        saveTasks(userTasks)


        //call display item to add it to ol
        displayItem(userEntry)

        //wipe the user entry field
        userInputArea.value= ''
    }
}



//display item, which is called within build item and displayItems which is automatically called on page refresh
function displayItem(task){
    //create a variable representing a span element
    let spanText = document.createElement('span')
    //add to that span the task string
    spanText.textContent = task

    //create a list item
    let li = document.createElement('li')
    //append that span to the list item
    li.appendChild(spanText)


    //Create the edit function for the edit button
    function editItem(){
        //variable that holds answer to prompting user if they are sure they want to edit, and what to edit item to
        let newUserInput = prompt("What would you like to change this taks to? ")
        //check the users response to the propmt, replace old text with new text otherwise ignore it. An empty prompt == null so we need to check against it
        if(newUserInput !=null && task.length>0){
            //pull existing tasks array and save as a variable
            let tasksArr = getTasksArray()
            //save variable equal to that of the index of the past task
            let pastInputIndex = tasksArr.indexOf(task)
            //change the past task using that index var to the new task value
            tasksArr[pastInputIndex]=newUserInput
            //resave the tasks array
            // localStorage.setItem('tasks', JSON.stringify(tasksArr))
            saveTasks(tasksArr)
            //change the text in the list item
            spanText.textContent = newUserInput

        }
    }


    //Create the delete function for the delete button
    function deleteItem(){
        //ask the user if they want to delete the task
        if(prompt('Would you like to delete this task? ').toLowerCase()=='yes'){
            //create var equal to task array at time of invocation
            let tasksArr = getTasksArray()
            //save variable equal to the index of the value of the task
            let pastInputIndex = tasksArr.indexOf(task)
            //remove the task using the splice method
            tasksArr.splice(pastInputIndex, 1)
            //resave the tasks array to the localStorage
            // localStorage.setItem('tasks', JSON.stringify(tasksArr))
            saveTasks(tasksArr)


            // remove the list item for this task that was deleted
            li.remove()
        }
    }

    //create the edit button, add text inside to label it as such, and add it to the list item element
    let edit = document.createElement('button')
    edit.innerText = 'Edit'
    li.appendChild(edit)
    //add an event listener event on that button to invoke the above editItem function when button clicked
    edit.addEventListener('click', editItem)

    //create the delete button, add text inside to label it as such, adn add it to the list item element
    let deleteButton = document.createElement('button')
    deleteButton.innerText = "Delete"
    li.appendChild(deleteButton)
    //add event listener to the button to invoke the deleteItem function
    deleteButton.addEventListener('click', deleteItem)

    //append the list item to the ordered list item (ol variable)
    ol.appendChild(li)

}


//define the function to wipe the localStorage
function wipeStorage(){
    //clear storage
    localStorage.clear()

    //remove all rendered list items in the ol
    let lis = document.querySelectorAll('li')
    lis.forEach(li=>li.remove())

    //reset the tasks key in localStorage to an empty array (stringified)
    createTasks()
}

//Create an event listener that will create a to do item when the 'add' element is clicked, invokes the actuall function that adds the task
add.addEventListener('click', buildItem)

//create an event listener that will wipe local storage
wipe.addEventListener('click', wipeStorage)











//old code, for non localStorage, and for first localStorage setup

// //create a variable for the button which will be the initial main functionality
// const button = document.querySelector('#add')
// //creat variable for unordered list
// const ol = document.querySelector('ol')
// //crate an event listener which calls a function when the button is clicked
// button.addEventListener('click', addItem)

// //define the function that adds what the user typed in as a task to a list item then append that list item to the list
// //this function builds a list item, which will hold buttons so their functionality will also be within this function
// function addItem(){
//     //save user input task
//     const userTask = document.querySelector('input').value
//     //create list item using user input
//     let li = document.createElement('li')
//     //create a span element which will hold user task text
//     let span = document.createElement('span')
//     span.textContent = userTask
//     //add that span to the list item
//     li.appendChild(span)

//     //create buttons at the bottom of the list item to add functionality of editing them or deleting them;
//     //edit span text button
//     let editTask = document.createElement('button')
//     editTask.textContent = 'Edit'
//     li.appendChild(editTask)

//     //More buttons for moving tasks up or down the list, maybe even move them to the top or end of the list in one action
//     // let moveTop = document.createElement('button')
//     // moveTop.textContent = "Top"
//     // li.appendChild(moveTop)
//     // moveTop.addEventListener('click', moveToTop)
//     // function moveToTop(){
//     //     //change the li value attribute to 0 or order to 1 in css; to display it first
//     //     let current = (this.parentNode)
//     //     //flexbox order
//     //     document.querySelector('li').style.order = 0
        
//     // }
//     // //I couldn't find what I specifically wanted to do to list items moving to the top or bottom of a ul or ol yet, I will come back and finish this at a later time


//     //delete list item button; is after the relocation buttons for usability purposes
//     let deleteTask = document.createElement('button')
//     deleteTask.textContent = 'Delete'
//     li.appendChild(deleteTask)
//     //event listener on edit button and declaration of edit button
//     editTask.addEventListener('click', changeTask)
//     function changeTask(){
//         let newTask = prompt('What would you like to change this to? ')
//         span.innerText = newTask
//     }
//     //event listener on delete button and declaration of delete button
//     deleteTask.addEventListener('click', removeTask)
//     function removeTask(){
//         let userResponse = prompt("Are you sure you want to delete this task? ")
//         if(userResponse.toLowerCase()==='yes'){
//             ol.removeChild(this.parentNode)
//             //This first selected the ol then said to remove a child from it, when we pass it this.parentNode, this referese to the scope of this if statement, its parent referese to the function, this in that specific usage is targeting the li the button is inside; console.log(this.parentNode) output confirmed it was the li where the button was pressed
//         }
//     }







//     //add list item to unordered list
//     ol.appendChild(li)


//     //wipe user task entry field
//     document.querySelector('input').value = ''
// }
// //create functionality for wiping the entire list
// let wiper = document.querySelector("#wipe")
// wiper.addEventListener('click', deleteAll)
// function deleteAll(){
//     let deleteReply = prompt("Are you sure you want to wipe you're entire list?")
//     if(deleteReply.toLowerCase() == 'yes'){
//         ol.innerText = ''
//     }
// }








//localStorage changes:

// //Create variables that refer to the buttons of the app
// let add = document.querySelector('#add')
// let wipe = document.querySelector('#wipe')

// //create a variable that points at the input field so we can save text input
// let userEntry = document.querySelector('input')
// //create a variable that points to the list
// let ol = document.querySelector('ol')
// //create 'tasks' array of items if one doesn't exist
// if(!localStorage.getItem('tasks')){
//     localStorage.setItem('tasks', '[]')
// }
// //otherwise
// //display on page load any tasks that already exist in the array of tasks
// let prexistingArr = JSON.parse(localStorage.getItem('tasks'))
// prexistingArr.forEach(e=>{
//     //maybe have a function that takes in a parameter of a string, so we iterate through our array
// })
// ///////////////////////////////


// //define the function to wipe the localStorage, readd the counter key after
// function wipeStorage(){
//     //clear storage
//     localStorage.clear()
//     //redeclare the counter
    
//     //remove all rendered list items in the ol
//     let lis = document.querySelectorAll('li')
//     lis.forEach(li=>li.remove())

//     //reset the tasks key in localStorage to an empty array (stringified)
//     if(!localStorage.getItem('tasks')){
//         localStorage.setItem('tasks', '[]')
//     }
// }


// //define the function to add a task to the localStorage object && ordered list in the dom
// function addItem(){
//     //get the stringified array out of the localStorage
//     let currentTaskArr = JSON.parse(localStorage.getItem('tasks'))
//     //create a variable that holds the user input
//     let userInput = userEntry.value
//     //add user input into temp array
//     currentTaskArr.push(userInput)
//     //'set'/save the array using stringify to save the array as a value to the key
//     localStorage.setItem('tasks', JSON.stringify(currentTaskArr))


//     //create a span element to hold the text in the eventual rendered list item
//     let spanText = document.createElement('span')
//     spanText.textContent=userInput

//     //create a list item 
//     let li = document.createElement('li')
//     //add to the list item the user input data that's held in spanText var
//     li.appendChild(spanText)



    
//     //create the edit function
//     function editItem(){
//         let newUserInput = prompt("What would you like to change this task to? ")
//         //if they entered anything, replace the old text with it otherwise ignore it
//         if(newUserInput!=null && newUserInput.length>0){
//             let tasksArr = JSON.parse(localStorage.getItem('tasks'))
//             let pastInputIndex = tasksArr.indexOf(userInput)
//             tasksArr[pastInputIndex]=newUserInput
//             localStorage.setItem('tasks', JSON.stringify(tasksArr))
//             spanText.textContent=newUserInput
//         }

//     }

//     //create the delete function
//     function deleteItem(){
//         if(prompt('Would you like to delete this task? ').toLowerCase()=='yes'){
//             let tasksArr = JSON.parse(localStorage.getItem('tasks'))
//             let pastInputIndex = tasksArr.indexOf(userInput)
//             tasksArr.splice(pastInputIndex, 1)
//             localStorage.setItem('tasks', JSON.stringify(tasksArr))

//             li.remove()
//         }
//     }

//     //create an edit button, add it inside the list item
//     let edit = document.createElement('button')
//     edit.innerText='Edit'
//     li.appendChild(edit)
//     //create the edit button listener
//     edit.addEventListener('click', editItem)

//     //create a delete button inside the list item
//     let deleteButton = document.createElement('button')
//     deleteButton.innerText = 'Delete'
//     li.appendChild(deleteButton)
//     //create the delete button listener
//     deleteButton.addEventListener('click', deleteItem)




//     // //append the list item to the ol
//     ol.appendChild(li)
//     //wipe the user input field
//     userEntry.value= ''
// }
