import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { Menu } from 'lucide-react';
const Navbar = (props) => {
    const [categories, setCategories] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);
    const [showDropdown, setShowDropdown] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(() => {
        setCategories(props.category);
    }, [props.category.length]);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1025);
        };
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        isMobile ? (
            <nav className='phone-navbar'>
                <div className='dropdown-container'>
                    <button className='menu-button' onClick={() => setShowDropdown(!showDropdown)}>
                        <Menu color='white' size={35}  />
                    </button>
                    {showDropdown && (
                        <ul className='dropdown-menu'>
                            {categories && categories.map((ele, index) => (
                                <li key={index} className='dropdown-item'>
                                    <Link
                                        className={`phone-navbar-button ${activeIndex === index ? 'active' : ""}`}
                                        to={ele.url}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        {ele.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
            ) : (
            <nav className='navbar'>
                <ul className='child-navbar' >
                    {categories && categories.map((ele, index) => {
                        return (
                            <li key={index} className='navbar-box'>
                                <Link
                                    className={`navbar-button ${activeIndex === index ? 'active' : ""}`}
                                    to={ele.url}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <p className='navbar-text'>{ele.name}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            )
    );
};

export default Navbar;
