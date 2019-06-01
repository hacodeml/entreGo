import React from 'react';
import { Link } from "react-router-dom";

import './header.component.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector('header');
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <header className={this.state.scroll > this.state.top ? "header-background" : ""}>
        <div className="inside-container">
          <Link className="header-logo" to="/home">entreGo</Link>
          <nav>
            <ul className="header-nav">
              <li><a href="http://"></a>H O M E</li>
              <li>A B O U T</li>
              <li><a href="http://"></a>S E R V I C E S</li>
              <li><a href="http://"></a>W O R K &nbsp; W I T H &nbsp; U S</li>
              <li><a href="http://"></a>C O N T A C T</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export {
  Header
}
