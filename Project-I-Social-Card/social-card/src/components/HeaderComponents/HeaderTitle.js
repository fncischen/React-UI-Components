import React from 'react';
import './Header.css';
import HeaderContainer from './HeaderContainer';

class HeaderTitle extends React.Component {
    render() {
        return this.props.title;
    }
}

export default HeaderTitle; 