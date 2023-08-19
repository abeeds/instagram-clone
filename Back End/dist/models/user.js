const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    // required fields
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthday: { type: Date, required: true },
    avatar: { type: String, required: true },
    // optional fields
    phoneNum: { type: Number, unique: true },
    bio: String,
    gender: String,
    // stats
    follower_count: { type: Number },
    following_count: { type: Number },
});
export const User = mongoose.model('User', userSchema);
