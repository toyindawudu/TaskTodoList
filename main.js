// Declare UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");


// Load all the Eventlistners

loadEventListeners();

// Functions

function loadEventListeners(){
  //Add task event listner
  form.addEventListener('submit', addTask)
}

// Functions 
function addTask(e){

  if(taskInput.value === ''){
    alert('Add a task')
  }
  // create a li element
  const li = document.createElement('li');
  // add class
  li.className = "collection-item";
  // add html text to append to the Li element
  li.appendChild(document.createTextNode(taskInput.value));
  // add an anchor element and 
  const link = document.createElement('a');
  // then a class
  link.className = 'delete-item secondary-content';
  // clear the taskInput 
  link.innerHTML = '<i class="fa fa-remove"></>';  
  // Append the link to the li
  li.appendChild(link);
  // Append the li to the ul
  taskList.appendChild(li);

  taskInput.value = '';




  e.preventDefault();
}

