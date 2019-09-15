/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Link} from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }

    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                <img
                                    alt="..."
                                    src={require("assets/img/brand/dsc_lockup.png")}
                                />
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <UncontrolledCollapse navbar toggler="#navbar_global">
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/brand/dsc_lockup.png")}
                                                />
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span/>
                                                <span/>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav
                                                        id="tooltip356693867asdf">
                                            <i className="ni ni-ui-04 d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Events</span>
                                        </DropdownToggle>

                                        <UncontrolledTooltip delay={0} target="tooltip356693867asdf">
                                            Coming Soon
                                        </UncontrolledTooltip>

                                        {/*<DropdownMenu className="dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <Media
                                                    className="d-flex align-items-center">
                                                     href="/">

                                                    <div
                                                        className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="ni ni-settings-gear-65"/>
                                                    </div>

                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Workshop
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua
                                                        </p>
                                                    </Media>
                                                </Media>

                                                <Media
                                                    className="d-flex align-items-center">

                                                    <div
                                                        className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-atom"/>
                                                    </div>

                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Project Building
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua
                                                        </p>
                                                    </Media>

                                                </Media>

                                                <Media
                                                    className="d-flex align-items-center">
                                                    <div
                                                        className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-satisfied"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h5 className="heading text-warning mb-md-1">
                                                            Join the Global Changes
                                                        </h5>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua
                                                        </p>
                                                    </Media>
                                                </Media>
                                            </div>
                                        </DropdownMenu>*/}
                                    </UncontrolledDropdown>

                                    <NavItem>
                                        <NavLink
                                            href="https://medium.com/developer-student-club-universitas-brawijaya"
                                            target="_blank">
                                            <span>
                                                Blog
                                            </span>
                                        </NavLink>
                                    </NavItem>

                                    {/*<UncontrolledDropdown nav>
                                        <DropdownToggle nav to="/blog" tag={Link}>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Blog</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem to="/landing-page" tag={Link}>
                                        Landing
                                        </DropdownItem>
                                        <DropdownItem to="/profile-page" tag={Link}>
                                        Profile
                                        </DropdownItem>
                                        <DropdownItem to="/login-page" tag={Link}>
                                        Login
                                        </DropdownItem>
                                        <DropdownItem to="/register-page" tag={Link}>
                                        Register
                                        </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>*/}
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.instagram.com/dsc.brawijaya"
                                            id="tooltip356693867"
                                            target="_blank">

                                            <i className="fa fa-instagram"/>
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Instagram
                                            </span>

                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693867">
                                            Follow us on Instagram
                                        </UncontrolledTooltip>
                                    </NavItem>

                                   {/* <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://github.com/creativetimofficial/argon-design-system-react"
                                            id="tooltip112445449"
                                            target="_blank"
                                        >
                                            <i className="fa fa-github"/>
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                Github
                                            </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip112445449">
                                            Template used on this web
                                        </UncontrolledTooltip>
                                    </NavItem>*/}

                                    {/*<NavItem className="d-none d-lg-block ml-lg-4">
                                        <Button
                                            className="btn-neutral btn-icon"
                                            color="default"
                                            href="/"
                                            target="_blank"
                                        >
                                            <span className="btn-inner--icon">
                                            <i className="fa fa-cloud-download mr-2" />
                                            </span>
                                            <span className="nav-link-inner--text ml-1">
                                                Yuk Join
                                            </span>
                                        </Button>
                                    </NavItem>*/}
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default DemoNavbar;
