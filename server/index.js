const express =require('express');
const session=require('express-session');
const passport=require('passport');
const Auth0Strategy=require('passport-auth0');
const cors = require('cors');
const massive = require('massive');
const config=require('./config');
const connectionString=config.connectionString;

const app = module.exports = express();
app.use( cors() );
massive( connectionString ).then( dbInstance => app.set('db', dbInstance) );

//session
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret:config.sessionsecret
}));

//passport init
app.use(passport.initialize());
//passport session
app.use(passport.session());

//
passport.use(new Auth0Strategy({
  domain: config.domain,
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL
},
function(accessToken, refreshToken, extraParams, profile, done)
{
  console.log("logged in: ", profile);
  //database stuff
  //user profile.id
  //if user->done
  //else create user ->done
  return done(null, profile);
}));

//two endpoints
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0',
{
  successRedirect: 'http://localhost:3000/',
  failureRedirect:'/auth'
}));

passport.serializeUser(function(user, done)
{
  done(null, user);
});

passport.deserializeUser(function(obj, done)
{
  done(null, obj);
});

app.get('/me', (req, res)=>
{
  if (!req.user)
    return res.send("");
  else
    res.status(200).send(req.user);
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('http://localhost:3000/');
})

app.listen(config.port, console.log("it works!"));
