//create an Array with some inputs
const trainersArray = [
    [
        "Bill",
        "Gates",
        "Back-end"
    ],
    [
        "Steve",
        "Jobs",
        "Front-End"
    ],
    [
        "Pichai",
        "Sundararajan",
        "Servers"
    ]
]
const table = document.getElementById('table1');
var selectIndex = -1;
createArray();
function createArray() {
    table.innerHTML = "";
    for (let i = 0; i < trainersArray.length; i++) {
        var tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
        table.appendChild(tr); // Append to <table> node
        for (var j = 0; j < 3; j++) {

            var tdElement = document.createElement('td');
            tdElement.innerHTML = trainersArray[i][j];
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
//creating a function that will appear the form and disappear the table
function showAddForm() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const submitButton = document.getElementById("new_entry");
    const updatebutton = document.getElementById("update_form");
    submitButton.style.display = "flex";
    updatebutton.style.display = "none";
    formDiv.style.display = "none";
    btnDiv.style.display = "flex";
}
function addNewTrainer(trainer) {
    trainersArray.push(trainer);
    createArray();
}
//add new row and colums for our inputs
// function addNewTrainer(trainer) {
//     var tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (var i = 0; i < 3; i++) {
//         var td = document.createElement('td');
//         td.innerHTML = trainer[i];
//         td.className = "table-cell"
//         tr.appendChild(td);
//     }
//     var tdElement = document.createElement('td');
//     var button = document.createElement("button");
//     button.innerHTML = "edit";
//     tdElement.appendChild(button);
//     tdElement.className = "table-cell"
//     tr.appendChild(tdElement);
// }
//Creating a function that will add new inputs in our table and appears it
function hideAddForm() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const nameInput = document.getElementById("new_name");
    const name = nameInput.value;
    nameInput.value = "";
    const lastNameInput = document.getElementById("new_last_name");
    const lastName = lastNameInput.value;
    lastNameInput.value = "";
    const subjectInput = document.getElementById("new_subject");
    const subject = subjectInput.value;
    subjectInput.value = "";
    //
    formDiv.style.display = "flex";
    btnDiv.style.display = "none";
    addNewTrainer([name, lastName, subject]);
}
function showEditForm(index) {
    showAddForm();
    selectIndex = index;

    let trainer_Array = trainersArray[index];
    let trainer = trainer_Array[0];
    const nameInput = document.getElementById("new_name");
    nameInput.value = trainer;

    // let trainer_Array1 = trainersArray[index];
    // let trainer2 = trainer_Array1[1];
    // const lastNameInput = document.getElementById("new_last_name");
    // lastNameInput.value = trainer2;

    // let trainer_Array2 = trainersArray[index];
    // let trainer3 = trainer_Array2[2];
    // const subjectInput = document.getElementById("new_subject");
    // subjectInput.value = trainer3;


    const submitButton = document.getElementById('new_entry');
    const updateButton = document.getElementById('update_form');
    submitButton.style.display = "none";
    updateButton.style.display = "flex";
}
function editTrainer() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const nameInput = document.getElementById("new_name");
    const name = nameInput.value;

    const lastNameInput = document.getElementById("new_last_name");
    const lastName = lastNameInput.value;

    const subjectInput = document.getElementById("new_subject");
    const subject = subjectInput.value;

    //


    trainersArray[selectIndex] = [name, lastName, subject];


    nameInput.value = "";
    lastNameInput.value = "";
    subjectInput.value = "";
    createArray();
    formDiv.style.display = "flex";
    btnDiv.style.display = "none";
}


