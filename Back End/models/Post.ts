const postSchema = new mongoose.Schema({
    // required
    user_id: {type: String, required: true},
    time_stamp: {type: Date, required: true, index: true},
    content: {type: String, required: true}, // point to path where content is stored
    
    // optional
    location: String,
    description: String,

    // stats
    like_count: {type: Number, required: true},
    comment_count: {type: Number, required: true}
})

export const Post = mongoose.model('Post', postSchema);