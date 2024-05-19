import React from 'react';
import './Header.css';

//Icons:
import SearchBar from '../SearchBar/SearchBar';
import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import NavBarMobile from '../NavBarMobile/NavBarMobile';

const Header = () => {

    const [toggle, setToggle] = React.useState(false);

    function toggleHamburguer (e) {
        e.preventDefault();
        setToggle(!toggle);
    }

    return (
        <>
            <header>
                <div className='mobile'>
                    <button id='bars' onClick={toggleHamburguer}>
                        {toggle ? <IoCloseSharp size={'30px'}/> : <FaBars size={'30px'}/>}
                    </button>
                    <a href='/'><img id='logo' src='./logo.png'/></a>
                    <button><BsBag size={'30px'}/></button>
                </div>
                <SearchBar/>
                <div className='teleshoppinginfo'>
                    <FiPhone size={'30px'}/>
                    <div>
                        <p>TELEVENDAS</p>
                        <p>(11) 5061-3036</p>
                    </div>
                </div>
                <div className='buttons'>
                    <FiUser style={{cursor: 'pointer'}} size={'30px'}/>
                    <BsBag style={{cursor: 'pointer'}} size={'30px'}/>
                </div>
            </header>
            <NavBarMobile classToggle={toggle ? 'show' : 'close'}/>
        </>
    );
}

export default Header;