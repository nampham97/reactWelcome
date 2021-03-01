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
                Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Infomation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Inventory</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Order</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
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