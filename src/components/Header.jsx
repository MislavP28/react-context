import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import reactLogo from '../assets/react.svg'

function Header({user}) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {/*<img src={reactLogo} className="logo react" alt="React logo" />*/}
          React Context API
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user.name}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };
