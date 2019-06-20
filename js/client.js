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
    $('#students').append(`<li>${student}</li>`);
}