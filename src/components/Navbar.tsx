import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export const AppNavbar = () => {
  return (
    <Navbar fixed="top" className="app-header">
      <Navbar.Brand
        as={NavLink}
        to="/components"
        className="brand"
      >
        FailiverCheck
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="navbar-items">
          <Nav.Link
            as={NavLink}
            to="/"
            end
            className="nav-link-custom"
          >
            Главная
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/components"
            className="nav-link-custom"
          >
            Компоненты
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
