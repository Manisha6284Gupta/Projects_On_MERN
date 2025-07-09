//let's create a complex example that demonstrate the use of the insertBrfore to manage  a list of student based on their grades . in this example, we we'll keep the list sorted based on the grade of each student. As new students are added, thay will be inserted in the correct position to maintain the sorted list.


// function to add a new student
function addStudent(name, grade){
    //create a new div element  to hold the student info 
    const studentEl = document.createElement("div");
    //add css to it

    studentEl.className = " student"

    // create a text node containing the student name and grade
    const studentTextNode = document.createTextNode(`${name}:${grade}`)
    let beforeNode = null;
    //append the text node to the div element
    console.log(studentTextNode);
    studentEl.appendChild(studentTextNode);

    // select the container
    const containerEl = document.getElementById("studentList");

    //Loop through existing student

    for(const child of containerEl.children)
    {
        const childGrade = parseInt(child.textContent.split(":")[1]);
        if(grade < childGrade){
            beforeNode = child;
            break;
        }
    }
    containerEl.insertBefore(studentEl,beforeNode)
    console.log(containerEl.children);

}
addStudent("manis",49);