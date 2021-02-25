import {Nav,Navbar,NavDropdown} from 'react-bootstrap';

function NavbarCpn({totalItems}){
    return <div>
         <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Shopping</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className='ml-auto'>
                <div className="navbar-brand">
                    <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
                    <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
                        {totalItems}
                    </span>
                    Items
                </div>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
}

export default NavbarCpn;