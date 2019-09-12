const userModel = require('../models/user.model')
exports.login = (req, res) => {

    let responseResult = {}
    req.checkBody('userEmail', 'useremail should be valid').isEmail()
    req.checkBody('password', 'password should have minimum 5 letters').isLength({ min: 5 })

    let errors = req.validationErrors()
    if (errors) {
        responseResult.err = errors;
        responseResult.message = "validation errors";
        responseResult.status = false;
        res.status(500).send(responseResult)
    }
    else {
        userModel.login(req.body, (err, result) => {
            if (err) {
                responseResult.err = err;
                responseResult.message = "something failed";
                responseResult.status = false;
                res.status(500).send(responseResult)
            }
            else {
                responseResult.data = result;
                responseResult.message = "logged in successfully";
                responseResult.status = true;
                res.status(200).send(responseResult)
            }
        })
    }
}
