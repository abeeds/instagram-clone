import React from 'react';
import NavBar from '../navbar';
import "./home.css";

function Home() {
    return (
        <>
            <NavBar/>
            <div className='home'>
                <div className='Stories'>

                </div>
                <div className='posts'>
                    <article className='post'>

                    </article>
                </div>
            </div>
        </>
    );
}

export default Home;