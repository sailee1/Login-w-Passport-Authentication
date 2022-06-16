const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const dotenv= require ('dotenv')
const colors = require ('colors') 
const connectDB = require('./config/db')
const port = process.env.PORT ||  5000

dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

//EJS 
app.use(expressLayouts)
app.set('view engine', 'ejs')

//Bodyparser 
app.use(express.urlencoded({extended: false}))

//Routes 
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))



app.listen(port, () => console.log(`Server started on port ${port}`))