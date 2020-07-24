const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('./models');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    models.User.findById(id).then((user)=>{
        done(null,user);
    });
});

passport.use(new LocalStrategy(
    {
        usernameField:'email',
        passwordField:'password'
    },
    function(username,password,done){
        models.User.findOne({email:username},(err,user)=>{
            if(err){ return done(err); }
            if(!user){ return done(null,false,{message:'Invalid UserName'}); }
            if(user.password===password){
                return done(null,user);
            }
            else{
                return done(null,false,{message:'Invalid Password'});
            }
        });
    }
));