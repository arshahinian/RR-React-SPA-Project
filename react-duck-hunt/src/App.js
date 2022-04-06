import React,{useState,useEffect} from 'react'
import './App.css';
import DuckContainer from './components/DuckContainer';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function App() {
 
  let[score,setScore] = useState(0)
  const createDuckSky = () => {
    let sky = [];
    
    for (let i = 0; i < 5; i++){ 
      if(i==0 || i==4) {
        sky.push(<Card.Text><img className="not-duck-image" src="./not_duck.jpg"/></Card.Text>)
      }
      else
      {
        sky.push(<Card.Text><DuckContainer key={i} setScore={setScore} score={score} /></Card.Text>)
      }      
    }
    
    return (      
      <Card>
        <Card.Header>React Duck Hunt!</Card.Header>
        <Card.Body>        
        {sky}
        </Card.Body>
        <Card.Footer>By Araz Shahinian</Card.Footer>              
      </Card>
    )
  }
  
  return (
    <div className="App">
      <Container>
        <Nav defaultActiveKey="/" variant="tabs" fill>
          <Nav.Item>
            <a href="/">Reset</a>
          </Nav.Item>
          <Nav.Item>
            <p>score:{score}</p>
          </Nav.Item>
        </Nav>             
        {createDuckSky()}
      </Container>
    </div>
  )
}

export default App;
