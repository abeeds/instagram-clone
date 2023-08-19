// used at the end, once all fields have been validated
function createNewUser(uName:String, userEmail:String, 
    userPassword:String, userBirthday:Date, userAvatar:String="", userPhoneNum:Number,
    userBio:String="", userGender:String) {

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
        })

        //save user to database
        newUser.save((err: any, savedUser: typeof User) => {
            if (err) {
                console.error('An error occurred while creating this account.');
            }
        })
}

module.exports = {
    createNewUser
};