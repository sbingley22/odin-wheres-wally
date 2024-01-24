import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate  } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL

const WinForm = ( { level, time } ) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const style = {
    color: "antiquewhite"
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (name === "") {
      console.log("No name entered!")
      navigate('/');
      return
    }

    //Send score to database
    sendScore()
    navigate('/');
  };

  const sendScore = async () => {
    try {
      const url = `${apiUrl}api/leaderboards`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, level, time }), // Include the score data here
      });
      const jsonData = await response.json();
      //console.log(jsonData.message)
    } catch (error) {
      console.error('Error sending score:', error);
    }
  }

  return (
    <div>
      <h3 style={style}>Level {level} completed in {time} seconds!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label style={style}>Enter your name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default WinForm