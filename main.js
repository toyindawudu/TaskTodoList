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
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event listner
  form.addEventListener('submit', addTask)
  //Remove task event 
  taskList.addEventListener('click', removeTask)
  // Clear task event 
  clearBtn.addEventListener('click', clearTasks)
  // Filter through the task event
  filter.addEventListener('keyup', filterTasks)
}

// Get Tasks from LS if there data stored 

function getTasks(){
  // Initiate a variable called tasks
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // loop through the tasks in LS and create the DOM elements
  tasks.forEach(function(task){
    // create a li element
    const li = document.createElement('li');
    // add class
    li.className = "collection-item";
    // add html text to append to the Li element
    li.appendChild(document.createTextNode(task));
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
  })
}

// Add Task Function
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

  // store the data in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';
  // Prevents the default function
  e.preventDefault();
}

// Store task in local storage 
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task Function
function removeTask(e) {
  // If e.target contains delete-item 
  if(e.target.parentElement.classList.contains('delete-item')) {
    // Displays a dialogue box that confirms decision on the web page
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
    //Remove from the local storage 
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
  //Prevent the default action
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem){
  // insert into a variable
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // loop through the rest to see if the text content is equal to task
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task Function
function clearTasks(e){
  taskList.innerHTML = '';

  // Clear from local storage
  clearTasksFromLocalStorage();
}

// Clear from local storage 
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

// Filter Task Function
function filterTasks(e){
  // Search value paramaters 
  const text = e.target.value

  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.getElementsByClassName.display = 'block';
    } else {
      task.getElementsByClassName.display = 'none';
    }
  });
}