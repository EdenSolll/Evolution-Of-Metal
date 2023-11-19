import React, { useState } from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavbarToggler,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color='black' dark expand='lg' fixed='top'>
        <Container>
          <NavLink to='/' className={'navbar-brand'}>
          </NavLink>
          <NavbarToggler onClick={toggle} />
            <Nav navbar>

            </Nav>
          </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
