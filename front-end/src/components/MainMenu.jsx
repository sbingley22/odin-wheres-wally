import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const apiUrl = import.meta.env.VITE_API_URL

const MainMenu = () => {
  const [cardData, setCardData] = useState([
    {
      id: 1,
      imageUrl: 'whitby1.jpg',
      listItems: [],
    },
    {
      id: 2,
      imageUrl: 'whitby2.jpg',
      listItems: [],
    },
    {
      id: 3,
      imageUrl: 'whitby2.jpg',
      listItems: [],
    },
  ])
  
  const updateCards = (leaderboards) => {
    const newCards = [...cardData]
    for (let index = 0; index < leaderboards.length; index++) {
      const Leaderboard = leaderboards[index];
      const listItems = []
      for (let j = 0; j < Leaderboard.length; j++) {
        const element = Leaderboard[j];
        listItems.push(`${element.name}: ${element.time}s`) 
      }
      newCards[index].listItems = listItems
    }
    setCardData(newCards)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${apiUrl}api/leaderboards`
        const response = await fetch(url)
        const jsonData = await response.json()
        //console.log(jsonData.leaderboards)
        updateCards(jsonData.leaderboards)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  },[])

  return (
    <Row className="main-menu">
      {cardData.map((card) => (
        <Col key={card.id} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/game/${card.id}`}>
            <Card style={{ width: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src={card.imageUrl} alt={`Image ${card.id}`} />
              <Card.Body>
                <Card.Title>Leaderboard</Card.Title>
                <ListGroup>
                  {card.listItems.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default MainMenu