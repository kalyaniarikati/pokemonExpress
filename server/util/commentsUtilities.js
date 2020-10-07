let User = require("../model/comments");


const getComments = async function (e){
    console.log(e)
        await User.find({ 
            email: e
        }, function(err, arr) {
            if(err) return err;
           return arr;
        })
}

module.exports={
    getComments
}