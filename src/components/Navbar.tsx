import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

export const AppNavbar = () => {
    return (
        <Navbar fixed="top" className="app-header" >
                <Navbar.Brand
                    as={Link}
                    to="/components"
                    className="brand"
                >
                    FailiverCheck
                </Navbar.Brand>
        </Navbar>
    );
};
