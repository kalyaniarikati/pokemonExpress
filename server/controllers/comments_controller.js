const {getComments} = require('../util/commentsUtilities');

const getCommentsByEmail = async (req, res) => {
    let email = request.body.email;
    console.log(email)

    if (email != "") {
        let comments = await getComments(req)
        if(comments)
            res.send(comments)
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