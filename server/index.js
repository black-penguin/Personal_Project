const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
const controllers = require('./controllers/controller')

const stripe = require('stripe')(config.secret_key);
const connectionString=config.connectionString;

const app = express();

//app.use(express.statis(_dirname+'/../build'));

app.use(bodyParser.json());
app.use(cors());

massive(connectionString).then(dbInstance =>
{
  app.set('db', dbInstance);

  dbInstance.set_schema()
    .then(() => console.log('Tables reset'))
    .catch((err) => console.log(err))


  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret:config.sessionsecret
  }))
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new Auth0Strategy({
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
  },
    function (accessToken, refreshToken, extraParams, profile, done) {

      //logic for passing in new or existing account
      console.log("hi " +profile.displayName);

      dbInstance.getUser([profile.identities[0].user_id])
        .then((user) => {
          if (user[0])
          {
            return done(null, user[0]);
          }
          else
          {
            dbInstance.createUser(profile.identities[0].user_id, profile.displayName, profile.emails[0]["value"])
              .then((err, user) =>
              {
                dbInstance.getUser(profile.identities[0].user_id)
                  .then((user) =>
                  {
                    return (null, user[0])
                  })
                  .catch(err => console.log("catch1", err));
              })
              .catch(err => console.log("catch2", err));
          }
        })
        .catch(err => console.log("catch3", err));

      done(null, profile)
    }));

  passport.serializeUser(function (user, done)
  {
    done(null, user);
  });

  passport.deserializeUser(function (user, done)
  {
    done(null, user);
  });


  //these are the endppints, this first one kicks off the auth session
  app.get('/auth', passport.authenticate('auth0'));


  app.get('/auth/callback', passport.authenticate('auth0',
    {
      successRedirect: 'http://localhost:3000/'
    }));


  app.get('/me', function (req, res)
  {
    if (!req.user)
    {
      return res.status(200).send("");
    }
    else
    {
      res.status(200).send(req.user);
    }
  });


  //This is the part that will let the loggedin user to log out
  app.get('/logout', function (req, res)
  {
    req.logout();
    res.redirect('http://localhost:3000/');
  });

  app.post('/payment', function(req, res, next)
  {
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++)
    {
      if(amountArray[i] === ".")
      {
        if (typeof amountArray[i + 1] === "string")
        {
          pennies.push(amountArray[i + 1]);
        }
        else
        {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string")
        {
          pennies.push(amountArray[i + 2]);
        }
        else
        {
          pennies.push("0");
        }
      	break;
      }
      else
      {
      	pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));

    const charge = stripe.charges.create(
    {
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
    },
    function(err, charge)
    {
        if (err)
          return res.sendStatus(500);
        return
          res.sendStatus(200);
      // if (err && err.type === 'StripeCardError') {
      //   // The card has been declined
      // }
    });
  });
  //endpoints
  app.get("/api/images", controllers.getAll);
  app.get("/api/image/:id", controllers.getOne);
  app.get("/api/size/:id", controllers.getSize);
  app.get("/api/users", controllers.getUsers);
  app.get("/api/cart/:id", controllers.getCart);
  app.get("/api/cart/sum/:id", controllers.totalCart);

  app.post("/api/cart/add/:userID/:pictureID/:SizeID", controllers.addToCart);

  app.delete("/api/cart/rm/:id", controllers.rmCart);
});

app.listen(config.port, console.log("it works!"));
