const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type: String, 
        require: true
    
},
    email:{
    type: String, 
    require: true, 
    unique: true
},
password:{
    type: String, 
    require: true 
},

date: {
    type: true, 
    default: Date.now()
}
})

const User = mongoose.model('User', UserSchema)

module.exports = User