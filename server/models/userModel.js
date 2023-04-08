// createUser
// findUser
// updateUser
// deleteUser

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "username is mandatory!!!"],
    },
    name: {
        type: String,
        required: [true, "name is mandatory!!!"],
    },
    password: {
        type: String,
        validate: {
            validator: (value) => value.length >= 8,
            message: (data) => 'Passoword should be atleast 8 characters!!!'

        }
    }
});

userSchema.statics.createUser = async (userdata) => {
    const data = await UserModel.create(userdata);
    console.log(data);
    if (data) {
        return data
    }
}
userSchema.statics.findUser = async (username) => {
    const userdata = (await UserModel.findOne({username},{_id:0,__v:0}))?.toObject();
    if(userdata){
        return userdata;
    }else{
        const err = new Error("User doesn't exist");
        err.status = 404;
        throw err;
    }
}

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;