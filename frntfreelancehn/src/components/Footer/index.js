import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
import { IoIosHammer } from 'react-icons/io'
import {FaUserPlus} from 'react-icons/fa'
import { MdHome } from 'react-icons/md'

export default ()=>{

    return(
        <footer>
        <nav>
            <ul>
                <li><NavLink to="/"><MdHome size="2em"></MdHome></NavLink></li>
                <li><NavLink to="/signin"><FaUserPlus size ="2em"></FaUserPlus></NavLink></li>
                <li><NavLink to="/votes"><IoIosHammer size="2em"></IoIosHammer></NavLink></li>
            </ul>
        </nav>
    </footer>
    );
}