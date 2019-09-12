exports.login=(req,res)=>{

    let responseResult = {}
    req.checkBody('userEmail', 'useremail should be valid').isEmail()
    let errors = req.validationErrors()
    if(errors){
        responseResult.err=errors;
        responseResult.message="validation errors";
        responseResult.status=false;
        res.status(500).send(responseResult)
    }
}
