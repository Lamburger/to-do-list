var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://lam:lam@ds135624.mlab.com:35624/todolist', ['users']);

// Get All Tasks
router.get('/users', function(req, res, next){
    db.users.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// // Get Single Task
// router.get('/task/:id', function(req, res, next){
//     db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// });

//Save Task
router.post('/user', function(req, res, next){
   var task = req.body;

    db.users.findOne({username:task.usr,password:task.pass}, function(err, task){
        console.log(task);
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    
});


router.post('/user/register', function(req, res, next){
    console.log(req.body);
   var task = req.body;

    db.users.save({username:task.username,password:task.pass,email:task.email}, function(err, task){
        console.log(task);
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    
});
// Delete Task
// router.delete('/task/:id', function(req, res, next){
//     db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// });

// // Update Task
// router.put('/task/:id', function(req, res, next){
//     var task = req.body;
//     var updTask = {};
    
//     if(task.isDone){
//         updTask.isDone = task.isDone;
//     }
    
//     if(task.title){
//         updTask.title = task.title;
//     }
    
//     if(!updTask){
//         res.status(400);
//         res.json({
//             "error":"Bad Data"
//         });
//     } else {
//         db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
//     }
// });

module.exports = router;