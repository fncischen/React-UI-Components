import React from 'react';
import './Header.css';

class HeaderTitle extends React.Component {
    render() {
        return <h1> {this.props.title} </h1>;
    }
}