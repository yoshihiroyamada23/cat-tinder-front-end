import React from "react"
import HomeImage from '../Assets/HomeImage.png'

const Home = () => {
    return (
    <div className="home">
        <img src={HomeImage} alt ="kurrinImage" className="logo"/>
        <p className="tagline"> Master Love!</p>
        <p className="match"> Find Meow Match</p>
        
    </div>
)
}
export default Home