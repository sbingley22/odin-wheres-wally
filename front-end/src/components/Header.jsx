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
          <Nav className='ml-auto'>
            <div>
              <img src="/wally.JPG" alt='Wally' className='img-fluid image-icon'/>
              <img src='/wallete.JPG' alt='Wallete' className='img-fluid image-icon'/>
              <img src='/evil.JPG' alt='Evil' className='img-fluid image-icon'/>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header