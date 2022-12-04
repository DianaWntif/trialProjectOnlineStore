import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './header.css';
import SearchPanel from "../search-panel/search-panel";
import UserNav from "../userNav/userNav";

function Header() {
    return (
        <div id='header_top'>
            <Navbar className="header-navbar">
                <Container>
                    <Navbar.Brand style={{fontSize: 25}}
                                  href="/">Чипчик</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Каталог</Nav.Link>
                        <Nav.Link href="#features">Новости</Nav.Link>
                        <Nav.Link href="#pricing">Барахолка</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div id='searchFromHeader'>
                <Navbar className="header-navbar">
                    <Container>
                        <SearchPanel />
                        <UserNav />
                    </Container>
                </Navbar>
            </div>

        </div>

    );
}


//  <div id='searchFromHeader' className="me-auto">
export default Header;