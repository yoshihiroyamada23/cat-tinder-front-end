import React from "react"
import { Nav } from "reactstrap"
import { NavLink as RouterNavLink } from "react-router-dom"

const Header = () => {
    return (
        <Nav>
            <RouterNavLink to="/"> </RouterNavLink>
            <RouterNavLink to="/catindex" className="nav-link">
                Meet All the Cats
            </RouterNavLink>
            <RouterNavLink to="/catnew" className="nav-link">
                Add Your Cat
            </RouterNavLink>
            <a
                target="blank"
                href="https://tinder.com/"
                className="nav-link"
            >
                Find your Purrfect match!
            </a>
        </Nav>
    )
}
export default Header