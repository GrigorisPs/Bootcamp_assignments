const studentsArray = [
    [
        "Tom",
        "Cruise",
        "1962-07-03",
        "Upfront"
    ],
    [
        "Keanu ",
        "Reeves",
        "1964-09-02",
        "Bymonth"
    ],
    [
        "Scarlet",
        "Johansson",
        "1984-11-22",
        "Tba"
    ]
]
const table = document.getElementById('table2')
var selectIndex = -1;
createArray();
function createArray() {
    table.innerHTML = "";
    for (let i = 0; i < studentsArray.length; i++) {
        var tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
        table.appendChild(tr); // Append to <table> node
        for (var j = 0; j < 4; j++) {
            var tdElement = document.createElement('td');
            tdElement.innerHTML = studentsArray[i][j];
            tdElement.className = "table-cell"
            tr.appendChild(tdElement); // Take string from placeholder variable and append it to <tr> node
        }
        var tdElement = document.createElement('td');
        var button = document.createElement("button");
        button.addEventListener("click", function () { showEditForm(i) });
        button.innerHTML = "edit";
        tdElement.appendChild(button);
        tdElement.className = "table-cell"
        tr.appendChild(tdElement);

    }
}
function showAddForm() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const submitButton = document.getElementById("new_entry");
    const updateButton = document.getElementById("update_form");
    submitButton.style.display = "flex";
    updateButton.style.display = "none";
    formDiv.style.display = "none";
    btnDiv.style.display = "flex";
}
function addNewStudent(student) {
    studentsArray.push(student);
    createArray();
}
function hideAddForm() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const nameInput = document.getElementById("new_name");
    const name = nameInput.value;
    nameInput.value = "";
    const lastNameInput = document.getElementById("new_last_name");
    const lastName = lastNameInput.value;
    lastNameInput.value = "";
    const birthInput = document.getElementById("new_birth");
    const birth = birthInput.value;
    birthInput.value = "";
    const feeInput = document.getElementById("new_fee");
    const fee = feeInput.value;
    feeInput.value = "";
    //
    formDiv.style.display = "flex";
    btnDiv.style.display = "none";
    addNewStudent([name, lastName, birth, fee]);
}
function showEditForm(index) {
    showAddForm();
    selectIndex = index;

    let student_Array = studentsArray[index];
    let student = student_Array[0];
    const nameInput = document.getElementById("new_name");
    nameInput.value = student;
    const submitButton = document.getElementById('new_entry');
    const updateButton = document.getElementById('update_form');
    submitButton.style.display = "none";
    updateButton.style.display = "flex";
}

function editStudent() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const nameInput = document.getElementById("new_name");
    const name = nameInput.value;

    const lastNameInput = document.getElementById("new_last_name");
    const lastName = lastNameInput.value;

    const birthInput = document.getElementById("new_birth");
    const birth = birthInput.value;

    const feeInput = document.getElementById("new_fee");
    const fee = feeInput.value;

    //



    studentsArray[selectIndex] = [name, lastName, birth, fee];

    nameInput.value = "";
    lastNameInput.value = "";
    birthInput.value = "";
    feeInput.value = "";
    createArray();
    formDiv.style.display = "flex";
    btnDiv.style.display = "none";
}
