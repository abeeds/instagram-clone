const userSchema = new mongoose.Schema({
    // required fields
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}, // will be hashed
    birthday: {type: Date, required: true}, // check if users are at least 13 years old upon sign-up, this value can't be changed
    avatar: {type: String, required: true}, // will store the file path of the image, set to a default one if not provided

    // optional fields
    phoneNum: {type: Number, unique: true},
    bio: String,
    gender: String,

    // stats
    follower_count: {type: Number},
    following_count: {type: Number},
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User
};