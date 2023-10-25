const axios = require('axios');


exports.homeRoutes = (req,res) =>{
    //render login page
 res.render('login');
}

exports.teacher = (req,res) =>{

    //make api request to get results
    axios.get('http://localhost:3000/api/find-result')
    .then(function(response){
        res.render('index',{results : response.data});
    })
    .catch(err=>{
        res.send(err);
    });
}

exports.student = (req,res) =>{
    //show search page to search their result to student
    res.render('search_result');
}

exports.add_student_result = (req,res) =>{
    res.render('add_student_result');
}

exports.update_student_result =  (req,res) => {
    axios.get('http://localhost:3000/api/find-result',{params : {id : req.query.id}})
    .then(function(resultdata){
        res.render('update_student_result',{result : resultdata.data})
    })
    .catch(err=>{
     res.send(err);
    })
}

exports.search_student_result = (req, res) => {
 

    axios.get('http://localhost:3000/api/get-result',{params : {rollno : req.query.rollno, dob : req.query.dob}})
    .then(function(resultdata){
        res.render('student_result',{result : resultdata.data})
    })
    .catch(err=>{
     console.log(err.message);
     res.render('notfound',{message: err.message});
    })
}