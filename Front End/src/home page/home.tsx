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
                            image={"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"}
                            description=''
                            liked_by='Steve'
                            like_count={2}
                            comment_count={13}
                            location='New York'
                        />

                        <PostImage 
                            username={'Albert'} 
                            image={"https://img.freepik.com/free-photo/vertical-shot-adorable-dog-papillon-breed-dog_181624-30689.jpg?w=2000"}
                            description=''
                            liked_by='Watson'
                            like_count={1}
                            comment_count={4}
                            location='New York'
                        />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Home;