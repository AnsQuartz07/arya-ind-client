import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [categories, setCategories] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(() => {
        setCategories(props.category);
    }, [props.category.length]);
    useEffect(()=> {
        setY(x*2);
    }, [x])
    return (
        <nav>
            <ul style={{display: "flex", margin: '0', padding: '0', gap: '10%'}}>
                {categories && categories.map((ele, index) => {
                    return (
                        <li key={index}>
                            {/* <button onClick={()=>setX(x+1)} style={{padding: "10px 20px",fontSize: "16px",backgroundColor: "#007bff",color: "white",border: "none",borderRadius: "5px",
    cursor: "pointer"}}>
                                {x}

                            </button>


                            <button style={{padding: "10px 20px",fontSize: "16px",backgroundColor: "red",color: "white",border: "none",borderRadius: "5px",
    cursor: "pointer"}}>
                                {y}

                            </button> */}
                            <Link style={{textDecoration: "none", color: "white"}} to={ele.url}>{ele.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
