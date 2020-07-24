const express = require('express');
const passport = require('passport');
const app = express();
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const models = require('./passport/models');
const passportSetup = require('./passport/passportSetup');

mongoose.connect('mongodb+srv://todoapp:Praveen@jp2@users.mfgbv.mongodb.net/TodoApp?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>{
  console.log('connected successfully ');
});

app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:['todoappkey']
}));
app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());

app.post('/auth/signup',(req,res)=>{
  console.log(req.body.username);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const userobj = new models.User({
    username:username,
    email:email,
    password:password
  });
  userobj.save().then(data=>{
    if(data.id){
      res.json({message:true});
    }
    else{
      res.json({message:false});
    }
  });
 
});

app.post('/auth/login',passport.authenticate('local'),(req,res)=>{
    
    res.json({"user":req.user});
});

app.get('/logout',(req,res)=>{
  req.logout();
  res.json({path:'/'});
});

app.get('/getUser',(req,res)=>{
  
  res.json({"user":req.user});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);