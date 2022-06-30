async function getStudent(){

    let response = await fetch('http://localhost:8080/getTestStudent');
    let student = await response.json();

    const nameTextArea = document.getElementById("name");
    const emailTextArea = document.getElementById("email");
    nameTextArea.value = student.name;
    emailTextArea.value = student.email;
}

async function getAllStudents(){
    let response = await fetch('http://localhost:8080/getAllStudents');
    let allStudents = await response.json();

    populateTable(allStudents);
}

function populateTable(allStudents){
    const studentsTable = document.getElementById('studentsTable');
    for (const student of allStudents){
        const row = document.createElement('tr');
        const nameTd = document.createElement('td');
        nameTd.innerHTML = student.name;
        const emailTd = document.createElement('td');
        emailTd.innerHTML = student.email;
        row.appendChild(nameTd);
        row.appendChild(emailTd);
        studentsTable.appendChild(row);
    }
}

function initPage(){
    const button = document.getElementById('getStudentButton')
    button.addEventListener("click", getStudent);
    const allStudentsButton = document.getElementById('getAllStudentsButton')
    allStudentsButton.addEventListener("click", getAllStudents);

}




window.onload = (event) => {
    initPage();
};