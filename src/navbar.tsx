import React from 'react';
import "./navbar.css";
import {ReactComponent as HomeIcon} from './images/home.svg';
import {ReactComponent as SearchIcon} from './images/search.svg';
import {ReactComponent as ExploreIcon} from './images/explore.svg';
import {ReactComponent as MessageIcon} from './images/message.svg';
import {ReactComponent as NotificationsIcon} from './images/notifications.svg';
import {ReactComponent as CreateIcon} from './images/create.svg';
import {ReactComponent as TempI} from './images/temp.svg';

// This function is responsible for creating the navbar
// TODO: insert the SVGs before each word. Profile needs to show the profile picture before it
// TODO: need to set links, 
function NavBar() {
    return(<nav className='navbar'>
        <ul className='navbar-nav'>
            <li className='nav-logo'><a className='logo-text' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs'>INSTA CLONE</a></li>
            <li className='nav-item'>
                <div className='navicon'><HomeIcon/></div>
                <span className='navtext'>Home</span>
            </li>
            <li className='nav-item'>
                <div className='navicon'><SearchIcon/></div>
                <span className='navtext'>Search</span>
            </li>
            <li className='nav-item'>
                <div className='navicon'><ExploreIcon/></div>
                <span className='navtext'>Explore</span>
            </li>
            <li className='nav-item'>
                <div className='navicon'><MessageIcon/></div>
                <span className='navtext'>Messages</span>
            </li>
            <li className='nav-item'>
                <div className='navicon'><NotificationsIcon/></div>
                <span className='navtext'>Notifications</span>
            </li>
            <li className='nav-item'>
                <div className='navicon'><CreateIcon/></div>
                <span className='navtext'>Create</span>
            </li>
            <li className='nav-item'>
                <div className='navicon'><TempI/></div>
                <span className='navtext'>Profile</span>
            </li>
        </ul>
    </nav>);
}

export default NavBar;
