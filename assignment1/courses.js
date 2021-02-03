let coursesArray = [
    [
        "Java",
        "2020-12-05",
        "2021-03-25",
        "Full-time",
        "On Campus"
    ],
    [
        "C#",
        "2020-12-05",
        "2021-06-25",
        "Part-time",
        "Online"
    ],
    [
        "Html/Css/Javascript",
        "2020-12-05",
        "2020-06-25",
        "Part-time",
        "On Campus"
    ]
]
const table = document.getElementById('table3');
var selectIndex = -1;
createArray();
function createArray() {
    // const table = document.getElementById('table3');
    table.innerHTML = "";

    for (let i = 0; i < coursesArray.length; i++) {
        var tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
        table.appendChild(tr); // Append to <table> node
        for (var j = 0; j < 5; j++) {

            var tdElement = document.createElement('td');
            tdElement.innerHTML = coursesArray[i][j];
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
function addNewCourse(course) {
    coursesArray.push(course);
    createArray();
}
function hideAddForm() {

    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const courseInput = document.getElementById("courses");
    const course = courseInput.value;
    courseInput.value = "";
    const startDateInput = document.getElementById("startDate");
    const startDate = startDateInput.value;
    startDateInput.value = "";
    const endDateInput = document.getElementById("endDate");
    const endDate = endDateInput.value;
    endDateInput.value = "";
    const timeInput = document.getElementById("time");
    const time = timeInput.value;
    timeInput.value = "";
    const placeInput = document.getElementById("place1");
    const place = placeInput.value;
    placeInput.value = "";
    //
    formDiv.style.display = "flex";
    btnDiv.style.display = "none";

    addNewCourse([course, startDate, endDate, time, place]);

}

function showEditForm(index) {
    showAddForm();
    selectIndex = index;
    let couresArray = coursesArray[index];
    let course = couresArray[0];
    const courseInput = document.getElementById("courses");
    courseInput.value = course;
    const submitButton = document.getElementById("new_entry");
    const updateButton = document.getElementById("update_form");
    submitButton.style.display = "none";
    updateButton.style.display = "flex";

}

function editCourse() {
    const formDiv = document.getElementById("form_div");
    const btnDiv = document.getElementById("new_form");
    const courseInput = document.getElementById("courses");
    const course = courseInput.value;

    const startDateInput = document.getElementById("startDate");
    const startDate = startDateInput.value;

    const endDateInput = document.getElementById("endDate");
    const endDate = endDateInput.value;

    const timeInput = document.getElementById("time");
    const time = timeInput.value;

    const placeInput = document.getElementById("place1");
    const place = placeInput.value;

    //

    coursesArray[selectIndex] = [course, startDate, endDate, time, place];


    timeInput.value = "";
    endDateInput.value = "";
    startDateInput.value = "";
    courseInput.value = "";
    placeInput.value = "";
    createArray();
    formDiv.style.display = "flex";
    btnDiv.style.display = "none";

}