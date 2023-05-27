import React from 'react';
import NavBar from '../navbar';
import "./home.css";
import {ReactComponent as TempI} from '../images/temp.svg';

/*
    This function will display an image with the user
*/

// TODO: need post date, post location (optional) 
type PostProps = {
    username: string,
    location?: string
};



const PostImage = (props: PostProps) => {
    return(
        <div className='post'>

            {/* Profile pic on left, info in middle, options on right */}
            <div className='post-user'>
                <div className='post-user-pfp'>
                    <TempI/>
                </div>
                <div className='post-user-text'>
                    <a className='post-username' href=""><strong>{props.username}</strong></a>
                    <span className='post-date'>• 11-22-23</span>
                </div>
            </div>

            <div className='post-image'>

            </div>

            {/* Like, Comment. Save on far right */}
            <div className='post-options'>

            </div>

            {/* Liked by, then caption, view comments with num of comments, then  */}
            <div className='post-info'>

            </div>
        </div>
    )
}

function Home() {
    return (
        <div className="body">
            <NavBar/>
            <div className='home'>
                <div className='Stories'>

                </div>
                <div className='posts'>
                    <PostImage username={'Joey'}/>
                </div>
            </div>
        </div>
    );
}

export default Home;