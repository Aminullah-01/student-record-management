const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const studentscore = document.getElementById("studentScore");

const addStudentBtn = document.getElementById("addStudentBtn");
let errors = document.getElementById("errors");


addStudentBtn.addEventListener("click", (e) => {

    let message = [];

if (studentName.value === null || studentName.value === "") {
    message.push("Name is required");
}



if (studentAge.value === null || studentAge.value === "") {
    message.push("Age is required");
}

if (studentScore.value === null || studentScore.value === "") {
    message.push("Score is required");
}

if (message.length > 0) {
    errors.textContent = message.join(", ");
}else{
    // Proceed with adding the student
    let students = [];
    students.push({

        name: studentName.value,
        age: studentAge.value,
        score: studentScore.value
    });
}


    


    function addStudentToTable() {
        
        let studentTable = document.getElementById("studentTable");


        let row = studentTable.insertRow(-1);
        let idCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let ageCell = row.insertCell(2);
        let scoreCell = row.insertCell(3);
        let statusCell = row.insertCell(4);
        let actionCell = row.insertCell(5);

        let idCellnew = document.createTextNode(studentTable.rows.length - 1);
        let nameCellnew = document.createTextNode(studentName.value);
        let ageCellnew = document.createTextNode(studentAge.value);
        let scoreCellnew = document.createTextNode(studentScore.value);
        let statusCellnew = document.createTextNode(studentScore.value >= 50 ? "Pass" : "Fail");
        let actionCellnew = document.createElement("button");
        actionCellnew.setAttribute("class", "deleteBtn");
        actionCellnew.type = "button";
        actionCellnew.addEventListener("click", () => {
            row.remove();
        })

        idCell.appendChild(idCellnew);
        nameCell.appendChild(nameCellnew);
        ageCell.appendChild(ageCellnew);
        scoreCell.appendChild(scoreCellnew);
        statusCell.appendChild(statusCellnew);
        actionCell.appendChild(actionCellnew);
        actionCellnew.textContent = "Delete";
    }


    let totalStudents = document.getElementById("totalStudents");
let passedStudents = document.getElementById("passedStudents");
let failedStudents = document.getElementById("failedStudents");
let averageScore = document.getElementById("averageScore");

function updateStatistics() {
    let studentTable = document.getElementById("studentTable");
    let rows =  studentTable.querySelectorAll("tr");

    let total = rows.length;
    let pass = 0;
    let fail = 0;
    let totalScore = 0;

    rows.forEach(row => {
        const score = Number(row.cells[3].textContent);

        totalScore += score;

        if (score >= 50) {
            pass++;
        } else {
            fail++;
        }
    });

    totalStudents.textContent = 20;
    passedStudents.textContent = 29;
    failedStudents.textContent = fail;
    averageScore.textContent = 
        total === 0 ? 0 : (totalScore / total).toFixed(2);
        
}



    addStudentToTable("studentTable");

    
})












