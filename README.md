# Instagram Clone

The goal of this project is to learn React & Typescript while recreating Instagram and most of its features. I plan on using the MERN stack to build this app.


All icons used in this project are from Google fonts.

## Database Schemas
<ul>
    <li><strong>Users</strong>: username, email, password, phoneNum?, birthday, bio?, gender?, follower-count=0, following-count=0, profile_picture</li>
    <li><strong>Followings</strong>: followed-username, follower-username</li>
    <li><strong>Posts</strong>: user-id, location?, time_stamp, content, description?, like_count=0, comment_count=0</li>
    <li><strong>Likes</strong>: post-id, liker-username</li>
    <li><strong>Comments</strong>: post-id, username, date-commented, comment</li>
    <li><strong>Stories</strong>: username, date-posted, story-content</li>
</ul>
The question marks indicate optional fields, and the '=' indicate the starting values upon creation.<br>
My plan is to have all the counts be updated upon insert/delete to avoid having to use a count() statement every time.

## Current status
The navbar displays as intended <br>
Posts are mostly done on the front end. All thats left is to make the icons change when liked/saved<br>

## TODO
Installed express and some of the backend components<br>
Need to setup MongoDB (locally) connect that to the backend<br>
Need to plan out database model once I finish learning about MongoDB<br>
Need to figure out how to store messages and group messages in the DB<br>
Need to connect the backend and frontend<br>
