import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <Navbar color="faded" className="bg-hero px-5 py-3" light fixed="top" expand="md">
        <NavbarBrand href="/">BinarRental</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ms-auto mb-2 mb-lg-0 gap-5">
            <NavItem>
              <Link className="nav-link fw-semibold" to="/ourservices">
                Our Services
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link fw-semibold" to="/about">
                Why Us
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link fw-semibold" to="">
                Testimonial
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link fw-semibold" to="">
                FAQ
              </Link>
            </NavItem>
            <NavItem className="mt-2">
              <Link className="custom-btn-1 py-2 px-4" to="">
                Register
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
