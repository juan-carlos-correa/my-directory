import React, { Component } from 'react';
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
  DropdownItem
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
    const { gotoProfile, gotoUpdatePassword, closeSession, displayName } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>My directory</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  { displayName }
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
  displayName: PropTypes.string.isRequired,
};

export default NavbarComponent
