var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var mongodb = mongojs("mongodb://localhost:27017/taskList", ['tasks']);

//To get data
router.get('/tasks', function (req, res, next) {
    //res.send("Task Page");
     console.log("hello task js");
    mongodb.tasks.find(function (err, tasks) {
        if (err) {
            res.send("ERROR");
        }
        res.json(tasks);
    })
})

// to get single data
router.get('/task/:id', function (req, res, next) {
console.log("hello task js");
    mongodb.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send("err");
        }
        res.json(task);
    })

})

// To save data
router.post('/tasks', function (req, res, next) {
    console.log("hello task js");
    var task = req.body;

    if (!task.title || !(task.isTrue + '')) {
        res.status(400);
        res.json({
            "error": "wrong data"
        });
    } else {
        mongodb.tasks.save(task, function (err, task) {
            if (err) {
                res.send("err");
            }
            res.json(task);
        })

    }
})

// To delete data 
router.delete('/tasks/:id', function (req, res, next) {
    console.log("hello task js");
    mongodb.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send("err");
        }
        res.json(task);
    })

});

// To update
router.put('/tasks/:id', function (req, res, next) {
    console.log("hello task js");
    var task = req.body;
    var updTask = {};

    if (task.title) {
        updTask.title = task.title;
    }
    if (task.isTrue) {
        updTask.isTrue = task.isTrue
    }

    if (!updTask) {
        res.status(400);
        res.json({
            "error": "err"
        })
    }
    else {
        mongodb.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updTask, {}, function (err, task) {
            if (err) {
                res.send("err");
            }
            res.json(task);
        })
    }
});

module.exports = router;