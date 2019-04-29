const express = require('express');
const uuid = require('uuid');
const about = require('./about');
const data = require('./data');
console.log(about);
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 8000;
const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());


//custom middleware
app.use((req,res,next)=>{
    console.log(req.body);
    if(req.method==="POST"){
        req.body.createdAt=new Date();
        next();
    }
    next();
});
app.get('/data.json',(req,res) => {
    res.setHeader('Content-Type', 'application/json');
    fs.readFile(path.join(__dirname,'data.json'),'utf8',(err,data)=> {
        if (err) {
            console.log("EROOR !!!", err)
        }
        console.log("data", typeof (data));
        var usersData = JSON.parse(data);
        console.log("data-2", usersData);
        console.log("yha",usersData);
        res.send(usersData);
    });

});
// app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    // response = {
    //     id: id_count+1,
    //     name:req.body.name,
    //     username name:req.body.username,
    //     email : req.body.email,
    //     createdOn: new Date()
    // };
    // console.log(response+"----------"+data,id_count);
    // res.end(JSON.stringify(response));
//     fs.readFile(path.join(__dirname,'data.json'),'utf8',(err,data)=>{
//         if(err){
//             console.log("Error is ",err);
//             return err;
//         }
//         console.log("data is ",typeof data);
//         var obj= JSON.parse(data);
//         obj.push(data);
//         console.log('>>',obj);
//         fs.writeFile(path.join(__dirname,'Public','data.json'),JSON.stringify(obj),'utf8',(err2,data)=>{
//             if(err2){
//                 console.log('err2>>>>>>>>>>', err2);
//             }
//         });
//     });
// });

app.delete('/data.json/:id', (req,res)=> {
console.log("adnfjshfdssdb11111",req.body);
    fs.readFile(path.join(__dirname,'data.json'),'utf8',(err,data)=>{
        if(err){
            console.log("EROOR !!!",err)
        }
        console.log("data",typeof (data));
        data= JSON.parse(data);
        console.log("data-2",typeof (data),data.length);
        var newData = data.filter(item => item.id !== req.params.id);
        console.log("hererer",newData,newData.length);
        newData = JSON.stringify(newData);
        console.log("hererer",typeof (newData));
        fs.writeFile(path.join(__dirname,'data.json'),newData,'utf8',(err,data)=>{
            if(err){
                console.log("ERROR!!!!",err);
            }
        })
    });
    // student = student.filter(item => item.ID !== req.params.id);
    // data = require('./data');

    res.end();
});

app.post('/add', (req, res)=> {
    var user={
        id : uuid(),
        name:req.body.name,
        username :req.body.username,
        email : req.body.email,
        createdAt : req.body.createdAt
    }
    console.log(user);
    fs.readFile(path.join(__dirname,'data.json'),'utf8',(err,data)=>{
        if(err){
            console.log("Error is ",err);
            return err;
        }
        console.log("data is ",typeof data);
        var obj= JSON.parse(data);
        obj.push(user);
        fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(obj),'utf8',(err2,data)=>{
            if(err2){
                console.log('err2>>>>>>>>>>', err2);
            }
        });
    });
    res.redirect('http://localhost:3000/');
    // var d=req.requestTime;
    // var a=d.toString();
    // console.log(a);
});

app.get('/about.json',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    console.log(about);
    let newabout=JSON.stringify(about);
    res.send(newabout);
})

app.listen(PORT, (res)=>{
    console.log(`App is running on ${PORT}`);
})
