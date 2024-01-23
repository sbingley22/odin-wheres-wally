import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="success" variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link to="/" className='link-no-style'>Where's Dracular?</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-label">Characters</span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav' >
          <Nav className='ml-auto d-flex justify-content-center'>
            <div className='d-flex justify-content-center'>
              <div className='image-container'>
                <img src="/wally.JPG" alt='Dracula' className='img-fluid image-icon'/>
                <h6>Dracula</h6>
              </div>
              <div className='image-container'>
                <img src='/wallete.JPG' alt='Frankenstein' className='img-fluid image-icon'/>
                <h6>Frankenstein</h6>
              </div>
              <div className='image-container'>
                <img src='/evil.JPG' alt='Werewolf' className='img-fluid image-icon'/>
                <h6>Werewolf</h6>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header