const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    userID: Number,
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel