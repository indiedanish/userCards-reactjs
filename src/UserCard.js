import React from 'react'
import ReactCardFlip from 'react-card-flip'
import './style/cardStyle.css'
import { useState } from 'react'


const UserCard = ({ userData }) => {

    const [isFlipped, setFlipped] = useState(false)
    let [FlipStyle, setFlipStyle] = useState("vertical")

    const onHover = () => {
        setFlipped(true)


    }

    const flipBack = () => {
        setFlipped(false)


    }

    let changeFlipSide = () => {
        FlipStyle == "vertical" ? setFlipStyle("horizontal") : setFlipStyle("vertical");
        isFlipped == true ? setFlipped(false) : setFlipped(true);

    }



    return (

        <>


            <div className="mainCard">
                <ReactCardFlip isFlipped={isFlipped} flipDirection={FlipStyle} >

                    <div className="card" onMouseOver={onHover} onClick={changeFlipSide}  >
                        <img className="card_image" src={userData.picture.large} />
                        <h1 className="card_title">  {userData.name.first}  </h1>
                        <h1 className="card_age"> <i class="fa-solid fa-user"></i> {userData.name.first} {userData.name.last}  </h1>
                        <h3 className="card_cell"> <i class="fa-solid fa-phone"></i> {userData.cell}  </h3>

                    </div>

                    <div className="card" onMouseOut={flipBack} onClick={changeFlipSide} >

                        <i class="fa-brands fa-audible fa-3x"></i>
                        <h3 className="card_email">  {userData.email}  </h3>
                        <h3 className="card_location">
                        <i class="fa-solid fa-location-dot"></i> {userData.location.street.name}  </h3>



                    </div>
                </ReactCardFlip>
            </div>

        </>

    )

}

export default UserCard;
