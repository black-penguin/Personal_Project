const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy=require('passport-auth0');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
const stripe = require('stripe')(config.secret_key);
const connectionString=config.connectionString;

const app = module.exports = express();
app.use( cors() );
app.use(bodyParser.json());
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

app.get('/logout', function(req, res)
{
  req.logout();
  res.redirect('http://localhost:3000/');
});

app.post('/payment', function(req, res, next){
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function(err, charge) {
    if (err)
      return res.sendStatus(500);
    return
      res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});

app.listen(config.port, console.log("it works!"));
