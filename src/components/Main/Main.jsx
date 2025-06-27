import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, User</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>HTML</p>
                    <img src={assets.html} alt="" />
                </div>
                <div className="card">
                    <p>CSS</p>
                    <img src={assets.css} alt="" />
                </div>
                <div className="card">
                    <p>Javascript</p>
                    <img src={assets.js} alt="" />
                </div>
                <div className="card">
                    <p>ReactJS</p>
                    <img src={assets.react} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Whats on your mind?' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main