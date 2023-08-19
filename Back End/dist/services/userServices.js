import { User } from '../models/user';
// used at the end, once all fields have been validated
function createNewUser(uName, userEmail, userPassword, userBirthday, userAvatar = "", userPhoneNum, userBio = "", userGender) {
    // create new user
    const newUser = new User({
        username: uName,
        email: userEmail,
        password: userPassword,
        birthday: userBirthday,
        avatar: userAvatar,
        phoneNum: userPhoneNum,
        bio: userBio,
        gender: userGender,
        follower_count: 0,
        following_count: 0,
    });
    //save user to database
    newUser.save((err, savedUser) => {
        if (err) {
            console.error('An error occurred while creating this account.');
        }
    });
}
