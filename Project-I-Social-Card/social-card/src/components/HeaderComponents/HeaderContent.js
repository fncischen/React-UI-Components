import React from 'react';
import './Header.css';
import HeaderContainer from './HeaderContainer';

class HeaderContent extends React.Component {
    render() {
        return this.props.content;
    };
}

export default HeaderContent;