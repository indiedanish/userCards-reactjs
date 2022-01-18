import React from 'react'
import ReactCardFlip from 'react-card-flip'
import './style/cardStyle.css'
import { useState } from 'react'

import Button from '@mui/material/Button';
import axios from 'axios'


const UserCard = (props) => {

    const [isFlipped, setFlipped] = useState(false)
    let [FlipStyle, setFlipStyle] = useState("horizontal")
    const [deleted, setDeleted] = useState(false)


    React.useEffect(()=>{


    }, [deleted])

    const deleteQuiz = async (index) => {

        await axios.delete("http://localhost:3000/teacher/deletequiz/61e47ea33a814a12e4e3dc8c/"+index ).then(res=>{
    setDeleted(!deleted);
 })

 


    } 

    const onHover = () => {
        setFlipped(true)


    }

    const flipBack = () => {
        setFlipped(false)


    }

    let changeFlipSide = () => {
        FlipStyle == "vertical" ? setFlipStyle("horizontal") : setFlipStyle("vertical");
         setFlipped(true) 

    }
    let changeFlipSide2 = () => {
        FlipStyle == "vertical" ? setFlipStyle("horizontal") : setFlipStyle("vertical");
         setFlipped(false) 

    }


    return (

        <>


            <div className="mainCard">
                <ReactCardFlip isFlipped={isFlipped} flipDirection={FlipStyle} >

                    <div className="card" onMouseOver={onHover}  onClick={changeFlipSide}  >
                        
                        <h1 align="center"  className="card_title"> Quiz# {props.num+1} </h1>

                        
                        

                    </div>

                    <div className="card" onMouseOut={flipBack} onClick={changeFlipSide2} >

                    <Button style={{background:'#3d1414', color: 'white'}} onClick={()=>{deleteQuiz(props.num)}} > Delete</Button>

                        <i class="fa-brands fa-audible fa-3x"></i>
                        <h3 className="card_email">  {props.userData}  </h3>
                     
                      



                    </div>
                </ReactCardFlip>
            </div>

        </>

    )

}

export default UserCard;
