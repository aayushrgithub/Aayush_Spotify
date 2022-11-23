import React from 'react'
import "./Player.css"
import Sidebar from './Sidebar'
import Body from "./Body"
import Footer from "./Footer"

// Sidebar and body in same div because they are side by side in actual webpage.

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Player