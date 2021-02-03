const assignmentArray = [

    [
        "Tittle",
        "Submision Date",
        "Oral Mark",
        "Assignment Mark",
        "Total Mark"
    ],
    [

        "Front-end with simple forms",
        "2020-12-05",
        "15",
        "70",
        "85"
    ],
    [
        "Create a dynamic web page",
        "",
        "",
        "",
        ""
    ],
    [
        "Create an eshop",
        "",
        "",
        "",
        ""
    ]
]
const table = document.getElementById('table4');
var selectIndex = -1;
createArray();
function createArray() {
    table.innerHTML = "";
    for (let i = 0; i < assignmentArray.length; i++) {
        var tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
        table.appendChild(tr); // Append to <table> node
        for (var j = 0; j < 5; j++) {

            var tdElement = document.createElement('td');
            tdElement.innerHTML = assignmentArray[i][j];
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

function addNewAssignment(assignment) {
    assignmentArray.push(assignment)
    createArray();
}
function hideAddForm() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const titleInput = document.getElementById("assignment");
    const title = titleInput.value;
    titleInput.value = "";
    const submissionInput = document.getElementById("submission");
    const submission = submissionInput.value;
    submissionInput.value = "";
    const oralMarkInput = document.getElementById("oral");
    const oralMark = oralMarkInput.value;
    oralMarkInput.value = "";
    const assignmentMarkInput = document.getElementById("assign");
    const assignmentMark = assignmentMarkInput.value;
    assignmentMarkInput.value = "";
    const totalMarkInput = document.getElementById("total");
    const totalMark = totalMarkInput.value;
    totalMark.value = "";
    //
    formDiv.style.display = "flex";
    btnDiv.style.display = "none";
    addNewAssignment([title, submission, oralMark, assignmentMark, totalMark]);
}
function showEditForm(index) {
    showAddForm();
    selectIndex = index;

    let assign_Array = assignmentArray[index];
    let assignment = assign_Array[1];
    const titleInput = document.getElementById("assignment");
    titleInput.value = assignment;
    const submitButton = document.getElementById('new_entry');
    const updateButton = document.getElementById('update_form');
    submitButton.style.display = "none";
    updateButton.style.display = "flex";
}
function editAssignment() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const titleInput = document.getElementById("assignment");
    const title = titleInput.value;

    const submissionInput = document.getElementById("submission");
    const submission = submissionInput.value;

    const oralMarkInput = document.getElementById("oral");
    const oralMark = oralMarkInput.value;

    const assignmentMarkInput = document.getElementById("assign");
    const assignmentMark = assignmentMarkInput.value;

    const totalMarkInput = document.getElementById("total");
    const totalMark = totalMarkInput.value;

    //

    assignmentArray[selectIndex] = [title, submission, oralMark, assignmentMark, totalMark]

    totalMark.value = "";
    assignmentMarkInput.value = "";
    oralMarkInput.value = "";
    submissionInput.value = "";
    titleInput.value = "";
    createArray();
    formDiv.style.display = "flex";
    btnDiv.style.display = "none";
}