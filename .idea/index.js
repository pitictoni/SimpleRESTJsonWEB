async function getStudent(){

    let response = await fetch('http://localhost:8080/getTestStudent');
    let student = await response.json();

    const nameTextArea = document.getElementById("name");
    const emailTextArea = document.getElementById("email");
    nameTextArea.value = student.name;
    emailTextArea.value = student.email;
}

function initPage(){
    const button = document.getElementById('getStudentButton')
    button.addEventListener("click", getStudent);
}




window.onload = (event) => {
    initPage();
};