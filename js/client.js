console.log('Good Morning!');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch','Jake'
]

$(document).ready(onReady);

// When the DOM is ready, we will render (or display) our students 
function onReady () {
    console.log('jQuery works');
    // call the function 'renderStudentList' to display to DOM via jQuery
    renderStudentList(playfair);

    // create a 'click' event, using function showAwesomeAlert
    // Need to select something already on the DOM 
    // Can filter the event to something new (dynamically generated)

    // shouldn't do this! Because it will break later! 
    $('.student').on('click', showAwesomeAlert);

    // // -- do this with the 2nd arg to 'on' method ('.student')
    // $('#student').on('click', '.student', showAwesomeAlert);
    console.log(event);
    console.log('This:', this);
}

// This function will be called when we click on a student 
// It will show an alert saying the student is awesome 

function showAwesomeAlert (event) {
    console.log('Event', event);
    // In the event handler (**EVENT HANDLERS ARE ALWAYS FUNCTIONS**)
    // 'this' is what generated the event 
    // -- 'this' is always contextually 
    console.log(this);
    alert('Check the console!');
}

// add function to add students to DOM that sends in an array of students 
// and loops through the array, displaying each student rendered from 
// renderStudent to the DOM 
// -- don't pass in just 'playfair' because we hypothetically 
//    want to be able to pass any list of students into function 

function renderStudentList (studentList) {
    for (student of studentList) {
        //for each student, we need to call the function 'renderStudent'
        renderStudent(student);
    }
}

// add function that takes in a student by targeting 'students' 
// ID from HTML, and appends each student object, one at a time,
// into the DOM in an unordered list 
function renderStudent(student) {
    $('#students').append(`<li class="student">${student}</li>`);
}