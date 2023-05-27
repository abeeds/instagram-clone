import React from 'react';
import NavBar from '../navbar';
import "./home.css";

function Home() {
    return (
        <div className="body">
            <NavBar/>
            <div className='home'>
                <div className='Stories'>

                </div>
                <div className='posts'>
                    <article className='post'>

                    </article>
                </div>
            </div>
        </div>
    );
}

export default Home;