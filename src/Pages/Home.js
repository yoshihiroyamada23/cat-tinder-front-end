import React from "react"
import HomeImage from '../Assets/HomeImage.png'

const Home = () => {
return (
    <div className="home">
    <h1>Welcome to Cat Tinder</h1>
    <img src={HomeImage} alt ="cat" className="logo"/>
    </div>
)
}
export default Home