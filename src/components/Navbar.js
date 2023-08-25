import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setCategories(props.category);
    }, [props.category.length]);

    return (
        <nav>
            <ul style={{display: "flex", margin: '0', padding: '0', gap: '10%'}}>
                {categories && categories.map((ele, index) => {
                    return (
                        <li key={index}>
                            <Link style={{textDecoration: "none", color: "white"}} to={ele.url}>{ele.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
