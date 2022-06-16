const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const dotenv= require ('dotenv')
const colors = require ('colors') 
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const connectDB = require('./config/db')
const port = process.env.PORT ||  5000

//passport config 
require('./config/passport')(passport)

dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

//EJS 
app.use(expressLayouts)
app.set('view engine', 'ejs')

//Bodyparser 
app.use(express.urlencoded({extended: false}))


// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

  //Passport middleware 
  app.use(passport.initialize())
  app.use(passport.session())

  //Connect Flash 
  app.use(flash())

  //Global Vars 
  app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
  })


//Routes 
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))



app.listen(port, () => console.log(`Server started on port ${port}`))