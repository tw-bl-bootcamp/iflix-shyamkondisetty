const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userEmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true
}
);

const user = mongoose.model('users', userSchema);

function User() { }
User.prototype.login = (loginData, callback) => {
    user.findOne({ userEmail: loginData.userEmail, password: loginData.password }, (err, userResult) => {
        if (err) {
            callback(err)
        }
        else if(userResult==null){
            callback("invalid user")
        }
        else {
            callback(null, userResult)
        }

    })
}
module.exports = new User();
