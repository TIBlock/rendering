  
function renderStudents(students) {
    var studentsHTML = students.map(renderStudent).join('');
    
    return `
        <div class="text-center mt-5 roll_container">
            <h1 class="roll_call">Roll Call!</h1>
            ${studentsHTML}
        </div>
    
    
    `
    
};

function renderStudent(student){
    if (student.isPresent) {
        return `
            <div class="student_present";>
                <h3>${student.name}</h3>Present</div>
        `
    }else
        return `
        <div class="student_absent";>
            <h3>${student.name}</h3>Absent</div>
    `
    
    
}

// return students(student => {


    // return `
    //     <div class="text-center mt-5">
    //         <div>Roll Call!</div>
    //         <div style="width: 200px; height:100px; background-color: light
    //     </div>
    //     `
// });

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}