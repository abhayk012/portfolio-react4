import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mediaplayer from '../Assets/mediaplayer.png'
import qr from '../Assets/qr code generator.png'
import count from '../Assets/counter.png'
import netflix from '../Assets/Screenshot (12).png'
import food from '../Assets/Screenshot (14).png'
import weather from '../Assets/Screenshot (15).png'
import './Projects.css'

function Projects() {
    return (
        <div id="projects">
            <h1 className='text-center'><span style={{color:"green"}}>My </span>Projects</h1>
            <div className='d-flex justify-content-center mt-5'>

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={mediaplayer} />
                    <Card.Body className='cbody'>
                        <Card.Title>Media Player</Card.Title>
                        <Card.Text>
                        Created using React,HTML,CSS,Bootstrap
                        </Card.Text>
                        <div className='d-flex'>
                            <Button variant="success"><a style={{textDecoration:"none",color:"white"}} href="https://github.com/abhayk012/Mediaplayer_Front-end-react-project-"><i class="fa-brands fa-github"></i></a></Button>
                            <Button variant="primary" className='ms-3'><a style={{textDecoration:"none",color:"white"}} href="https://mediaplayer-front-end-react-project.vercel.app/"><i class="fa-solid fa-link"></i></a></Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='ms-5'>
                    <Card.Img variant="top" src={qr} />
                    <Card.Body className='cbody'>
                        <Card.Title>QR Code generator</Card.Title>
                        <Card.Text>
                        Created using React,HTML,CSS,Bootstrap
                        </Card.Text>
                        <div className='d-flex'>
                            <Button variant="success"><a style={{textDecoration:"none",color:"white"}} href="https://github.com/abhayk012/QR-code-generator"><i class="fa-brands fa-github"></i></a></Button>
                            <Button variant="primary" className='ms-3'><a style={{textDecoration:"none",color:"white"}} href="https://qr-code-generator-rho-nine.vercel.app/"><i class="fa-solid fa-link"></i></a></Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='ms-5'>
                    <Card.Img variant="top" src={netflix} />
                    <Card.Body className='cbody'>
                        <Card.Title>Netflix Clone</Card.Title>
                        <Card.Text>
                        Created using React,HTML,CSS,Bootstrap
                        </Card.Text>
                        <div className='d-flex'>
                            <Button variant="success"><a style={{textDecoration:"none",color:"white"}} href="https://github.com/abhayk012/Netflix-Clone-1"><i class="fa-brands fa-github"></i></a></Button>
                            <Button variant="primary" className='ms-3'><a style={{textDecoration:"none",color:"white"}} href="https://silver-bunny-412bb1.netlify.app/"><i class="fa-solid fa-link"></i></a></Button>
                        </div>

                    </Card.Body>
                </Card>
            </div>
            <div className='d-flex justify-content-center mt-5'>

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={count} />
                    <Card.Body className='cbody'>
                        <Card.Title>Counter</Card.Title>
                        <Card.Text>
                        Created using React,HTML,CSS,Bootstrap
                        </Card.Text>
                        <div className='d-flex'>
                            <Button variant="success"><a href="https://github.com/abhayk012/Counter-Redux" style={{textDecoration:"none",color:"white"}}></a><i class="fa-brands fa-github"></i></Button>
                            <Button variant="primary" className='ms-3'><a href="https://counter-redux-jade.vercel.app/" style={{textDecoration:"none",color:"white"}}></a><i class="fa-solid fa-link"></i></Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}className='ms-5'>
      <Card.Img variant="top" src={weather} />
      <Card.Body className='cbody'>
        <Card.Title>Weather app</Card.Title>
        <Card.Text>
        Created using HTML,CSS,Bootstrap
        </Card.Text>
        <div className='d-flex'>
        <Button variant="success"><a style={{textDecoration:"none",color:"white"}} href="https://github.com/abhayk012/Weather-by-abhay"></a><i class="fa-brands fa-github"></i></Button>
        <Button variant="primary" className='ms-3'><a style={{textDecoration:"none",color:"white"}} href="https://abhayk012.github.io/Weather-by-abhay/"><i class="fa-solid fa-link"></i></a></Button>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}className='ms-5'>
      <Card.Img variant="top" src={food} />
      <Card.Body className='cbody'>
        <Card.Title>Palaharam
        </Card.Title>
        <Card.Text>
          Created using React,HTML,CSS,Bootstrap
        </Card.Text>
        <div className='d-flex'>
        <Button variant="success"><a style={{textDecoration:"none",color:"white"}} href="https://github.com/abhayk012/Chayakkada"><i class="fa-brands fa-github"></i></a></Button>
        <Button variant="primary" className='ms-3'><a style={{textDecoration:"none",color:"white"}} href="https://chayakkada.vercel.app/"><i class="fa-solid fa-link"></i></a></Button>
        </div>
      </Card.Body>
    </Card>

            </div>

        </div>
    )
}

export default Projects