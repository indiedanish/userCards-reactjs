
import { useState, useEffect } from 'react'
import UserCard from './UserCard'
import './App.css';
import './style/cardStyle.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'

function App() {


  const [users, setUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {

    (async () => {

      let userData;

      try {
        const response = await fetch('https://randomuser.me/api/?results=18');
        userData = (await response.json()).results;

      }

      catch (error) {
        console.log(error)
        userData = [];

      }

      setUser(userData)
      setAllUsers(userData)
    })()


  }, [])

  const filterCards = e => {
    const value = e.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(
      user => (`${user.name.first} ${user.name.last}`
        .toLowerCase().includes(value) || `${user.email}`
        .toLowerCase().includes(value)
      )

    )

    setUser(filteredUsers)

  }

  return (
    <div>


      <div className="User" >

        <h1 className="title">User Cards </h1>

        <InputGroup className="mb-3">

          <FormControl
            placeholder="Search by name or email..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onInput={filterCards}
          />
        </InputGroup>

<div className="container">

        <Grid fluid>
          <Row  >


            {users.map((user, index) =>
              <Col sm   >
                <UserCard userData={user} key={index} />
              </Col>

            )}

          </Row>
        </Grid>
        </div>


      </div>

    </div>

  );
}

export default App;
