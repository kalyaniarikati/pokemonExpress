let User = require("../model/comments");


const getComments = async function (e, res){
        await User.find({ 
            email: e.body.email
        }, function(err, arr) {
            if(err) return err;
            // console.log(arr)
           return arr;
        })
}

module.exports={
    getComments
}