const React = require('react');
const Navbar = require('react-bootstrap').Navbar;
const Link = require('react-router').Link
const Nav = require('react-bootstrap').Nav;
const NavDropdown = require('react-bootstrap').NavDropdown;
const MenuItem = require('react-bootstrap').MenuItem;
const LinkContainer = require('react-router-bootstrap').LinkContainer;

module.exports = React.createClass({
    signOut: function () {
        alert('Signed out');
    },
    render: function () {
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><i className="fa fa-play-circle"></i> IRKit Remote</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title={<span><i className="fa fa-user"></i> Username</span>} id="header-navbar-nav-navdropdown">
                            <LinkContainer to="/devices/">
                                <MenuItem eventKey={1.1}><i className="fa fa-plug"></i> Manage devices</MenuItem>
                            </LinkContainer>
                            <MenuItem divider />
                            <MenuItem eventKey={1.2} onClick={this.signOut}><i className="fa fa-sign-out"></i> Sign out</MenuItem>
                        </NavDropdown>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});
