const express = require('express')
const dotenv= require ('dotenv')
const colors = require ('colors') 
const connectDB = require('./config/db')
const port = process.env.PORT ||  5000

dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

//Routes 
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.set('view engine', 'ejs')

app.listen(port, () => console.log(`Server started on port ${port}`))