console.log('JS');

$(document).ready(onReady);

function onReady () {
    console.log('JS');
    $('#add-task').on('click', addTaskHandler);
    $('#task-list').on('click', '.delete', deleteTask);
    $('#task-list').on('click', '.flag', flagButton);
    $('#clear-tasks').on('click', deleteAllTasks);
}

function addTaskHandler (event) {
    // Default action when you submit a form
    // - click 'submit' type button inside a <form> 
    //      is to refresh page. We want to prevent that! 
    event.preventDefault();
    
    const taskName = $('#task-name').val();
    console.log('Clicked add task:', taskName);

    // Add the task
    addTask(taskName);

    // Clear out the form field so we can enter new stuff 
    $('#task-name').val('');
}

function addTask (task) {
    console.log('adding task:', task);

    // add to dom
    // ** ID TAGS ARE UNIQUE, CLASSES CAN BE APPLIED TO MANY THINGS **
    $('#task-list').append(`<li>${task}<button class="delete">Delete</button>
   <button class="flag">Flag</button> </li>`); 

}

// function to delete task - argument of an event 
function deleteTask (event) {
    console.log('clicked delete', $(this).parent().text());
    // 'this' is the delete button...
    // we want to remove it's parent element, the <li>
    $(this).parent().remove();
}

// ** TASK ** // 
// add another button: 'flag' next to the delete button

function flagButton (event) {
    console.log('clicked flag', $(this).parent().text());
    // Made style class in the css '.important'
    // We want to select the <li> which is the parent of 
    // 'this' or the thing we clicked on
    $(this).parent().addClass('important');
    // $(this).parent().toggleClass('important');
}

// 
function deleteAllTasks (event) {
    $('#task-List').empty();

}