import React from "react"
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><Link to="/catedit">Catedit</Link></li>
                    <li><Link to="/catshow">Cat Show</Link></li>
                    <li><Link to="/catnew">New Cat</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </div>
)
}
export default Header