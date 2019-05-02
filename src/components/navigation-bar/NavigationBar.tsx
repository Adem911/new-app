import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";

class NavigationBar extends React.Component {
  state = {
    current: "home"
  };

  handleClick = (e: any) => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="mail" />
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key="page1">
          <Link to="/page1">
            <Icon type="appstore" />
            Page One
          </Link>
        </Menu.Item>

        <Menu.Item key="page2">
          <Link to="/page2">
            <Icon type="appstore" />
            Page Two
          </Link>
        </Menu.Item>

        <Menu.Item key="page3">
          <Link to="/page3">
            <Icon type="appstore" />
            Page Two
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavigationBar;
