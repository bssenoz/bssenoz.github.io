import React, { useEffect,useState } from "react";
import axios from "axios"; 
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Row, Col } from 'react-grid-system';
import pc from '../img/pc.jpg'

const Project = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
      const fetchData = async() => {
        const response = await axios.get('https://api.github.com/users/bssenoz/repos');
        setData(response.data);
      }
      fetchData();
    }, []);

  return (
    <div className='App-header' id="project">
      <Container >
        <Row>
          <Col sm={6} >
            <ul >
                <h3 style={{paddingRight: "10%"}}>My Projects</h3><br></br>
              {data.map(repo=>
                <div key={repo.id} style={{paddingRight: "10%",marginBottom: "1%"}}>
                  <div>
                    <Link href={repo.html_url} isExternal style={{textDecoration: "none",padding: "5px",color: "#5454bf"}}>
                      {repo.name} <ExternalLinkIcon/>
                    </Link>
                  </div>
                </div>
              )}

            </ul>
          </Col>
          <Col sm={6}>
            <img src={pc} alt="pc" style={{width: "80%",marginTop:"15%"}}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Project