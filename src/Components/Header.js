import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className="header d-flex align-items-center">
            <div className="container">
                <nav className="header_wrapper">
                    <ul className="header_wrapper_list d-flex justify-content-between align-items-center">
                        <li className="header_wrapper_list_item">Logo</li>
                        <li className="header_wrapper_list_item"><Link to={'create'}>Create post</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;