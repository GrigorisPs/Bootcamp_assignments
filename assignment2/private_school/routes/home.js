var express = require('express');
var router = express.Router();
var dbconnection = require('../lib/db');
var Trainer = require('../models/Trainer');
var Student = require('../models/Student');






/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', { title: 'Private School', messege: '' });
});





/*Get trainer page*/
//URL: http://localhost:3000/home/trainer
router.get('/trainers', function (req, res, next) {
    const query = "SELECT * FROM trainer";
    dbconnection.query(query, function (err, rows) {
        if (err) {
            res.render('trainers', { title: 'Trainers', trainer: 'ERROR', messege: '' })
        } else {
            res.render('trainers', { title: 'Trainers', trainer: rows });
        }
    })

});
// URL: http://localhost:3000/home/trainers/add
// Adds new trainers in our db
router.get('/trainers/add/', function (req, res, next) {
    res.render('trainers_new', { title: 'Trainer - Add New', message: '' });
})
// POST for trainers
router.post('/trainers/add', function (req, res, next) {
    var trainer = new Trainer(undefined, req.body.first_name, req.body.last_name, req.body.subject);
    const query = "INSERT INTO `trainer`(first_name, last_name, subject) VALUES(?, ?, ?);";
    dbconnection.execute(query, [trainer.first_name, trainer.last_name, trainer.subject], function (err, status) {
        if (err) {
            res.render("trainers_new", { title: 'Trainer - Add new', message: "Error adding new trainer" });
        } else {
            res.redirect('/trainers/');
        }
    });

});



/*Get students page*/
//URL: http://localhost:3000/home/students
router.get('/students', function (req, res, next) {
    const query = "SELECT * FROM student";
    dbconnection.query(query, function (err, rows) {
        if (err) {
            res.render('students', { title: 'Students', student: 'ERROR', message: '' })
        } else {
            res.render('students', { title: 'Students', student: rows });
        }
    })

})
// URL: http://localhost:3000/home/students/add
//Adds new students in our db
router.get('/students/add/', function (req, res, next) {
    res.render('students_new', { title: 'Students - Add New', message: '' });
})
// POST for students/add
router.post('/students/add', function (req, res, next) {
    var student = new Student(undefined, req.body.first_name, req.body.last_name, req.body.date_of_birth, req.body.tuition_fees);
    const query = "INSERT INTO `student`(first_name, last_name, date_of_birth, tuition_fees) VALUES( ? , ? , ?, ?);";
    dbconnection.execute(query, [student.first_name, student.last_name, student.date_of_birth, student.tuition_fees], function (err, result, fields) {
        if (err) {
            res.render("students_new", { title: 'Student - Add new', message: "Error adding new trainer" });
        } else {
            res.redirect('/students/');
        }
    });

});




/*Get course page*/
//URL: http://localhost:3000/home/courses
router.get('/courses', function (req, res, next) {
    const query = "SELECT * FROM course";
    dbconnection.query(query, function (err, rows) {
        if (err) {
            res.render('courses', { title: 'Courses', course: 'ERROR', messege: '' })
        } else {
            res.render('courses', { title: 'Courses', course: rows });
        }
    })

})



/*Get assignment page*/
//URL: http://localhost:3000/home/assignments
router.get('/assignments', function (req, res, next) {
    const query = "SELECT * FROM assignments";
    dbconnection.query(query, function (err, rows) {
        if (err) {
            res.render('assignments', { title: 'Assignments', assignments: 'ERROR', messege: '' })
        } else {
            res.render('assignments', { title: 'Assignments', assignments: rows })
        }
    })

})


module.exports = router;


