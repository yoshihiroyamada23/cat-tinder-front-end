import React from "react"
import HomeImage from '../Assets/HomeImage.png'

const Home = () => {
return (
    <>
    <h1 className="header">Welcome to Cat Tinder</h1>
    <img src={HomeImage} alt ="cat" className="logo"/>
    </>
)
}
export default Home