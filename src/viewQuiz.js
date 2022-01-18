
import { useState, useEffect } from 'react'
import UserCard from './UserCard'
import './App.css';
import './style/cardStyle.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'
import axios from "axios";

import AddQuiz from "./addQuiz"

function ViewQuiz() {


  const [users, setUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isFlipped, setFlipped] = useState(false)

  const [quizzes, setQuizzes] = useState([]);

  // useEffect(() => {

  //   (async () => {

  //     let userData;

  //     try {
  //       const response = await fetch('https://randomuser.me/api/?results=18');
  //       userData = (await response.json()).results;

  //     }

  //     catch (error) {
  //       console.log(error)
  //       userData = [];

  //     }

     
  //   })()


  // }, [])


  const getNode = async() => {
  
    const options = {
      method: 'GET',
      url: '/admin',

      headers: {
        
        "Content-Type": "application/json",
      }
    };

//     const login =  await axios.post("http://localhost:3000/teacher/login" ,   
//     {headers: {

//       "Content-Type": "application/json",
//     },
//       body: {
	
	
//         "username" : "hm@gmail.com",
//         "password" : "12345"
//       }

// } )
    
    const data  = await axios.post("http://localhost:3000/teacher/viewquiz/61e47ea33a814a12e4e3dc8c"
    
    
    )

   setQuizzes(data.data)
    console.log("THISS",data.data)

  }

  useEffect (()=>{

    getNode()
  
  },[])

  const filterCards = e => {

    const value = e.target.value.toLowerCase();
    const filteredUsers = quizzes.filter(
      user => (`${user}`
        .toLowerCase().includes(value) 
      )
    )
    setQuizzes(filteredUsers)

    if(e.target.value==""){
      getNode()

    }

  }

  return (




    
    <div>



      <div className="User" >

        <h1 className="title"  >View Quizes  </h1>
        <p1 className="note"> (Click on card to change it's Flip Style) </p1>


        <InputGroup className="mb-3">

          <FormControl
            placeholder="Search..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onInput={filterCards}
          />
        </InputGroup>

        <Grid fluid>
          <Row >


            {quizzes.map((user,i) =>{
            
            return   <Col sm   >
                <UserCard userData={user} num={i} />
              </Col>
            }
            )}

          </Row>
        </Grid>
      </div>


    </div>

  );
}

export default ViewQuiz;
