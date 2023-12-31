import React, {useState, useEffect} from 'react'
import { Github, BoxArrowUpRight}  from 'react-bootstrap-icons'
// import { Prev } from 'react-bootstrap/esm/PageItem'
import { Gallery } from './Gallery';
import { Features } from  './Features';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive'

export const ProjectPage = ({project}) =>{
    const [hoverLink, onHoverLink] = useState(false)
    const [hoverGit, onHoverGit] = useState(false)

    return(
        <>
            {project.title !== 'Web Developer Portfolio' ? (
                <>
                <center><h2>{project.title}</h2></center>
            <br></br>

            <Container>
                <center>
            <h4 style={{color:'lightYellow'}}>{project.blurb}</h4>
            <br></br>
            <h5>{project.blurb2}</h5>
            </center>
            <br></br>
            <MediaQuery minWidth={992}>
                {/* LAPTOP */}
            <Row>
                <Col>
                    <Gallery project={project}/>
                    <div style={{color: 'lightYellow'}}>
                        <center>
                        <small>{project.info}</small>
                        </center>
                    </div>
                 
                </Col>
                <Col>
                    <Features project={project}/>
                </Col>
                </Row>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                {/* SMARTPHONE or TABLET */}
            <Row>
                <Col>
                    <Gallery project={project}/>
                    <div style={{color: 'lightYellow'}}>
                        <center>
                        <small>{project.info}</small>
                        </center>
                    </div>
                 
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Features project={project}/>
                </Col>
                </Row>
  

            </MediaQuery>



            <MediaQuery maxWidth={767}>
                {/* SMARTPHONE */}
            <Row>
                <Col>
                    <Gallery project={project}/>
                    <div style={{color: 'lightYellow'}}>
                        <center>
                        <small>{project.info}</small>
                        </center>
                    </div>
                 
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Features project={project}/>
                </Col>
                </Row>
            </MediaQuery>
                
                <br></br>
                <center>
                    <p style={{color:'yellow'}}>Note: This web app was developed for use on laptops and desktops. Some features may not be available on smartphones or tablets (yet!)</p>
                <h4> 
                    Check it out: &nbsp;
                <a target="_blank" href={project.site}
                 onMouseEnter={()=>{
                    onHoverLink(true);
                }}
                onMouseLeave={()=>{
                    onHoverLink(false);
                }}
                style={{color: hoverLink? 'indigo': 'yellowGreen', fontSize: '5vh'}}>
                <BoxArrowUpRight />
                </a>
                &emsp;
                &emsp;
                Code: &nbsp; 
                <a target="_blank" href={project.github} 
            onMouseEnter={()=>{
                onHoverGit(true);
            }}
            onMouseLeave={()=>{
                onHoverGit(false);
            }}
            style={{color: hoverGit ? 'indigo': 'yellowGreen', fontSize: '6vh'}}
            ><Github />
            </a>
                
            </h4>
            </center>
            </Container>
                </>

            ):(
                <>
                <br></br>
                 <Gallery project={project}/>
                 <center>
                    <br></br>
                    <h6>This SPA was built using ReactJS, React-Bootstrap, and CSS animations. <br></br>Screen size and device responsiveness added using the React-Responsive library.</h6>
                    <p style={{color: 'lightYellow'}}>Deployed through GitHub Pages.</p>
                    <h4>
                        Code: &nbsp; 
                        <a target="_blank" href={project.github} 
                            onMouseEnter={()=>{
                            onHoverGit(true);
                            }}
                            onMouseLeave={()=>{
                            onHoverGit(false);
                            }}
                            style={{color: hoverGit ? 'indigo': 'yellowGreen', fontSize: '6vh'}}
                        >
                            <Github />
                        </a>
                    </h4>
                 </center>
                </>

            )}
            
  
        </>
    )
}