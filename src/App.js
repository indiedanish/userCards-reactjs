
import { useState, useEffect } from 'react'
import UserCard from './UserCard'
import './App.css';
import './style/cardStyle.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

import AddQuiz from "./addQuiz"
import SignIn from './signin'

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes } from "react-router-dom";
import ViewQuiz from './viewQuiz'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Route} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (

    <>   

    <Router>

    {/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}

    {/* <Nav >
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
         
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
       */}

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/SignIn">Teacher Pannel</Navbar.Brand>
    <Nav className="me-auto">

      <Nav.Link href="ViewQuiz">      <Link style={{ color: '#9B9D9E' ,   textDecoration: "none"}} to="/ViewQuiz">View Quiz</Link></Nav.Link>
      <Nav.Link href="Add Quiz">      <Link style={{ color: '#9B9D9E',   textDecoration: "none"}} to="/AddQuiz">Add Quiz</Link></Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
      <Routes>   
      <Route exact path="/ViewQuiz" element={<ViewQuiz />} />
      <Route exact path="/AddQuiz" element={<AddQuiz />} />
      <Route exact path="/SignIn" element={<SignIn />} />
  
      </Routes>  
      </Router>

  
</>

  );
  
}

export default App;
