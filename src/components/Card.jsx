import React from "react";
import profilePic from "../assets/images/image-victor.jpg"
import patternBG from "../assets/images/bg-pattern-card.svg"

function Card() {
    return(
        <div>
            <div className="top">
            <div className="bg-image">
                <img src={patternBG} alt="background-image"/>
            </div>
            <img src={profilePic} alt="profile picture" className="profile-pic" />
            <p className="name">Victor Crest<span>26</span></p>
            <p>London</p>
            </div>
            <div className="card-inner-grid">
                <div className="item">
                    <p>80K</p>
                    <p>Followers</p>
                </div>
                <div className="item">
                    <p>803K</p>
                    <p>Likes</p>
                </div>
                <div className="item">
                    <p>1.4K</p>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    )
}
export default Card;