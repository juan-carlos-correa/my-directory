import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
} from 'reactstrap';

class NavbarComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { gotoProfile, gotoUpdatePassword, closeSession, user } = this.props;
    const { name, isAdmin } = user;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>My directory</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                isAdmin && (
                  <NavItem>
                    <NavLink tag={RRNavLink} exact to="/main/jobs" activeClassName="active">Puestos de trabajo</NavLink>
                  </NavItem>
                )
              }
              {
                isAdmin && (
                  <NavItem>
                    <NavLink tag={RRNavLink} exact to="/main/subsidiaries" activeClassName="active">Sucursales</NavLink>
                  </NavItem>
                )
              }
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  { name }
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={gotoProfile}>
                    Perfil
                  </DropdownItem>
                  <DropdownItem onClick={gotoUpdatePassword}>
                    Cambiar contraseña
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={closeSession}>
                    Cerrar sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavbarComponent.propTypes = {
  gotoProfile: PropTypes.func.isRequired,
  gotoUpdatePassword: PropTypes.func.isRequired,
  closeSession: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

export default NavbarComponent
