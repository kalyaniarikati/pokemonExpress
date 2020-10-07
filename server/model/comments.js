const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User= new schema({
    name:String,
    email:String,
    comment: String
})

module.exports = mongoose.model("User", User)