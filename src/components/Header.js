import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

// this isn't doing anything currently but we might need a header at somepoint
function Header() {
  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand href="/">Tipezane</NavbarBrand>
    </Navbar>
  );
}

export default Header;
