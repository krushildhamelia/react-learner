import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../shared/images/logo.svg';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string
    }

    render() {
        const {
            title = "Welcome to React",
            url = "http://localhost:3000/"
        } = this.props;

        return (
            <header className="App-header">
                <a href={url}>
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h2>{title}</h2>
            </header>
        )
    }
}

export default Header;