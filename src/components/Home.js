import React from 'react'
import female from '../img/female developer 1.svg'
import { Container, Row, Col } from 'react-grid-system';
import { GoChevronDown } from "react-icons/go";
import {HashLink as Link} from 'react-router-hash-link';

const Home = () => {
  return (
    <section className='App-header' id="home">
        <Container >
            <Row>
                <Col sm={6}>
                    <img src={female} alt="female developer" style={{width: "100%"}}/>
                </Col>
                <Col sm={6} style={{marginTop: "15%"}}>
               <h1 >Hello there! I'm Buse.</h1>
               <h2>I'm a computer engineering student.</h2>
                </Col>
            </Row>
                <Link to="#about" smooth style={{fontSize: "3rem"}}>
                <GoChevronDown />
                </Link>
        </Container>
    </section>
  )
}

export default Home