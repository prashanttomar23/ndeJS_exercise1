const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const app = express();
const router =require('./route/routes');

const userSchema =new mongoose.Schema({
    firstName :String,
    lastName : String
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://prashant_tomar:qwertyuiop23@clustermeg-dkebi.mongodb.net/test?retryWrites=true&w=majority',({useNewUrlParser: true,
useUnifiedTopology: true}))
    .then(()=> console.log("connected"))
    .catch(err=> console.log("not connected"))


const User = mongoose.model('User',userSchema);//class User

app.use('/public',express.static(__dirname + '/public'));


async function addUser(){
    const testUser = new User({
        firstName:"Prashant",
        lastName:"Tomar"
    });//object of class coruse
    const result =await testUser.save();
    console.log(result);
}
//addUser();
async function getUser(){
    const users = await User.find();
    console.log(users);
}
//getUser();

// index.html
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/users", (req, res) => {
    User.find({}, (err, result) => {
        if(err) {
            res.status(200).json({error: err});
        } else {
            res.status(200).json(result);
        }
    });
});

app.delete('/users/:id', async(req, res) => {
    const id = req.params.id;
    User.deleteOne({_id: id}, (err) => {
        if(err) {
            res.status(200).json({error: err});
        }
    }).then(res => {
        res.status(200).json({message: "Ok"});
    });
    
} );

app.post('/users', async(req,res)=>{
    const { fname, lname } = req.body;
    const user = new User({
        firstName:fname,
        lastName:lname
    });
    await user.save();
    res.sendFile(__dirname + "/public/index.html");
});



app.listen("3000");

