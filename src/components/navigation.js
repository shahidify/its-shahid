import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem
} from "reactstrap";
import ScrollchorItem from "./scrollchor-item";
import Scrollspy from "react-scrollspy";
import "./navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolledDown: false,
      isOpen: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleCloseCollapse = this.handleCloseCollapse.bind(this);
  }

  handleScroll() {
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let scrolledDownEnough = bodyScrollTop > 75 ? true : false;
    this.setState({
      hasScrolledDown: scrolledDownEnough
    });
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleCloseCollapse() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const whiteBackground = this.state.hasScrolledDown
      ? "white-background navbar-border"
      : "";
    const fontColor = this.state.hasScrolledDown ? "blue-font" : "white-font";

    return (
      <Navbar className={whiteBackground} fixed={"top"} expand="md">
        <NavbarBrand href="https://www.shahidify.tech/" className={fontColor}>
          MSK
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar}>
          <i className={`fa fa-navicon ${fontColor}`} />
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} className={`${fontColor}`} navbar>
          <Scrollspy
            items={["about", "skills", "experience", "education"]}
            currentClassName="active"
            className={`${fontColor} ml-auto navbar-nav`}
            navbar
          >
            <NavItem onClick={this.handleCloseCollapse}>
              <ScrollchorItem to="#about" className="nav-link">
                ABOUT ME
              </ScrollchorItem>
            </NavItem>
            <NavItem onClick={this.handleCloseCollapse}>
              <ScrollchorItem to="#skills" className="nav-link">
                SKILLS
              </ScrollchorItem>
            </NavItem>
            <NavItem onClick={this.handleCloseCollapse}>
              <ScrollchorItem to="#experience" className="nav-link">
                EXPERIENCE
              </ScrollchorItem>
            </NavItem>
            <NavItem onClick={this.handleCloseCollapse}>
              <ScrollchorItem to="#education" className="nav-link">
                EDUCATION
              </ScrollchorItem>
            </NavItem>
          </Scrollspy>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
