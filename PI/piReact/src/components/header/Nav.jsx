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
    let visible;
    if (this.state.open) {
      visible = <HamburguerMenu  fn={this.HandlerClickX} />;
    }
    return (
      <nav>
        <MobileMenu fn={this.HandlerClickMenu} />
        {/* <UserEntry/> */}
        <UserData />
        {visible}
      </nav>
    );
  }
}

export default Nav;
