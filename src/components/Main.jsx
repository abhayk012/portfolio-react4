import React, { useState } from 'react'
import { Toggle } from './Toggle'
import me from '../Assets/PORTFOLIO IMG.png'
import "./main.css"
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import cv from '../Assets/CV/mysamplecv.pdf'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import { createContext } from 'react';



// export const ThemeContext = React.createContext(null)

function Main() {
  const [theme, settheme] = useState("light")
  const toggletheme = () => {
    settheme((curr) => (curr === "dark" ? "light" : "dark"))
  }
  return (
    <>
     <Navbar expand="lg" className="nav">
      <Container className='navcontainer'>
        <Navbar.Brand href="#home" className='navname'><span style={{color:"green"}}>AK</span> Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className='navname'>About</Nav.Link>
            <Nav.Link href="#skills" className='navname'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='navname'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='navname'>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Toggle handleChange={toggletheme} isChecked={theme === "dark"} />
    <div className="App" id={theme}>
   




      
        <div className='d-flex'>
          
        </div>
        <div className='d-flex'>
        <div className='myname '>
          <h1 className="title">Hi Iam Abhay Krishnan</h1>
            <h2 style={{color:"red"}}>Web Developer</h2>
            <p><span style={{color:"green"}}>THIS</span> IS MY OFFICIAL PORTFOLIO WEBSITE TO DESCRIBE ALL <br />
          DETAILS AND WORK EXPERIENCE WEB DEVELOPMENT.</p>
            <a class="download" href={cv} target="_blank">DOWNLOAD/VIEW CV</a>
            </div>
            
           
            <div>
              <img src={me} alt="" className='me'/>
            </div>
        </div>
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
      
    </>


  )
}

export default Main