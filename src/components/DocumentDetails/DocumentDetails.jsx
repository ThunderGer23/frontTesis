import './DocumentDetails.css'
import {Container,Nav,Navbar} from 'react-bootstrap';

export const DocumentDetails =()=> {

    const onClick = (event) => {
      console.log(event);
    }

  return (
      <>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand
          onClick = {onClick}
          value = 'Login'>
              <img className='logo-header' src="./img/mq19.png" alt="" />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link
              onClick = {onClick}
              value = 'Home'> Home
            </Nav.Link>
            <Nav.Link
              onClick = {onClick}
              value = 'Features'>Features</Nav.Link>
            <Nav.Link
              onClick = {onClick}
              value = 'Pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}