import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
const Navbar = (props) => {
    const [categories, setCategories] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(() => {
        setCategories(props.category);
    }, [props.category.length]);

    return (
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
    );
};

export default Navbar;
