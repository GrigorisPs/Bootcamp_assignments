function showCoursePerStudent() {
    const optionStudent = document.getElementById("per_student");
    const optionTrainer = document.getElementById("per_trainer");
    const optionAssignment = document.getElementById("per_assign");
    optionStudent.style.display = "flex";
    optionTrainer.style.display = "none";
    optionAssignment.style.display = "none";
}
function showCoursePerTrainer() {
    const optionStudent = document.getElementById("per_student");
    const optionTrainer = document.getElementById("per_trainer");
    const optionAssignment = document.getElementById("per_assign");
    optionStudent.style.display = "none";
    optionTrainer.style.display = "flex";
    optionAssignment.style.display = "none";
}
function showCoursePerAssignment() {
    const optionStudent = document.getElementById("per_student");
    const optionTrainer = document.getElementById("per_trainer");
    const optionAssignment = document.getElementById("per_assign");
    optionStudent.style.display = "none";
    optionTrainer.style.display = "none";
    optionAssignment.style.display = "flex";
}