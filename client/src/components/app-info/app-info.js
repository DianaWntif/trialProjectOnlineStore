import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './app-info.css';

function AppInfo() {
    return (
        <>
          <Navbar className = "header-navbar" >
            <Container>
              <Navbar.Brand     style = {{fontSize: 25}}
                                href="#home">Чипчик</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Каталог</Nav.Link>
                <Nav.Link href="#features">Новости</Nav.Link>
                <Nav.Link href="#pricing">Барахолка</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }

export default AppInfo;