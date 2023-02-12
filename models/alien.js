const mongoose = require('mongoose')


 // SQL VS NOSQL

//RDBMS       -      MONGODB

// Database   -      Database
// Tables     -      Collections
// Rows       -      Documents  
// Columns    -      Fields

// 1 collection means 1 Alien with name,tech,sub


const alienSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    },

})

module.exports = mongoose.model('Alien',alienSchema)
