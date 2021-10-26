import React, { Component } from "react";
import UserData from "./UserData";
import HamburguerMenu from "./HamburguerMenu";

import MobileMenu from "./MobileMenu";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  HandlerClickMenu = () => {
    this.setState({ open: true });
  };
  HandlerClickX = () => {
    this.setState({ open: false });
  };
  render() {
    let open;
    if (this.state.open) {
      open = <HamburguerMenu  fn={this.HandlerClickX} />;
    }
    return (
      <nav>
        <MobileMenu fn={this.HandlerClickMenu} />
        {/* <UserEntry/> */}
        <UserData />
        {open}
      </nav>
    );
  }
}

export default Nav;
