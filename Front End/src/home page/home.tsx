import NavBar from '../navbar.tsx';
import "./home.css";
import {ReactComponent as TempI} from '../images/temp.svg';
import {ReactComponent as Like} from './post options/like.svg';
import {ReactComponent as Save} from './post options/save.svg';
import {ReactComponent as Comment} from './post options/comment.svg';
import {ReactComponent as UserOptions} from './post options/user-options.svg';


/*
    This function will display an image with the user
*/

// TODO: need to figure out post date 
type PostProps = {
    username: string,
    image: string,
    location?: string,
    liked_by?: string,
    description?: string,
    like_count: number,
    comment_count: number
};

function addCommasToNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const PostImage = (props: PostProps) => {
    return(
        <div className='post'>

            {/* Profile pic on left, info in middle, options on right */}
            <div className='post-user'>
                <div className='post-user-pfp'>
                    <TempI/>
                </div>
                <div className='post-user-info'>
                    <div className='post-user-text'>
                        <a className='post-username' href=""><strong>{props.username}</strong></a>
                        <span className='post-date'>• 11-22-23 </span>
                    </div>
                    {props.location && <a className='user-location'>{props.location}</a>}
                </div>
                <div className='post-user-options'>
                    <UserOptions/>
                </div>
            </div>

            <div className='post-image'>
                <img src={props.image}/>
            </div>

            {/* Like, Comment. Save on far right */}
            <div className='post-options'>
                <div className='post-like'>
                    <Like/>
                </div>
                <div className='post-comment'>
                    <Comment/>
                </div>

                <div className='post-save'>
                    <Save/>
                </div>
            </div>

            {/* Liked by, then caption, view comments with num of comments, then  */}
            <div className='post-info'>
                {!props.liked_by ? 
                    <span className='post-white'>
                        <strong>{addCommasToNumber(props.like_count)} likes</strong>
                    </span> : 
                    <span className='post-white'>
                        Liked by <strong>{props.liked_by}</strong> {props.like_count > 2 ? (
                            <>
                                and <strong>{addCommasToNumber(props.like_count - 1)}</strong> others
                            </>
                        ) : props.like_count == 2 ? (
                            <>
                                and <strong>1</strong> other
                            </>
                        ) : null}
                    </span>}
                
                <br/>
                {props.description && 
                <>
                    <span className='post-white'>
                        <strong>{props.username}</strong>
                        {props.description}
                    </span>
                    <br/>
                </>
                }
                
                {/*Only add view option if there are more than 0 comments*/}
                {props.comment_count > 0 ? <>
                        <span className='post-comment-option'> View all {props.comment_count} comments</span> 
                        <br />
                    </>: null}
                <span className='post-comment-option'>Add a comment...</span>
            </div>
        </div>
    )
}

function Home() {
    return ( <>
            <div className="body">
                <NavBar/>
                <div className='home'>
                    <div className='Stories'>

                    </div>
                    <div className='posts'>
                        
                        <PostImage 
                            username={'Joey'} 
                            image={"https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwZG9nfGVufDB8fDB8fHww&w=1000&q=80"}
                            description=''
                            liked_by='Steve'
                            like_count={2}
                            comment_count={13}
                            location='New York'
                        />

                        <PostImage 
                            username={'Joey'} 
                            image={"https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwZG9nfGVufDB8fDB8fHww&w=1000&q=80"}
                            description=''
                            liked_by='Steve'
                            like_count={2}
                            comment_count={13}
                            location='New York'
                        />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Home;