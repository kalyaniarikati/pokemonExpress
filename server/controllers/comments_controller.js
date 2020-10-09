const {getComments} = require('../util/commentsUtilities');
let User = require("../model/comments");

const getCommentsByEmail = async (req, res) => {
    let email = req.body.email;
    let comments=[];
    
    if (email != "") {
         comments = await User.find({ 
            email: req.body.email
        }, function(err, arr) {
            if(err) return err;
            // console.log(arr)
           return arr;
        })
        console.log(comments[0].name)
        if(comments)
        res.render('../server/views/comments',  {c: (comments)})
            else{
                res.status(404)
                res.send(req.err)
            }
    } else {
        res.send("Please provide us first name");
    }

}

module.exports={
    getCommentsByEmail
}