import React from 'react';
import './Header.css';
import HeaderContainer from './HeaderContainer';

class ImageThumbnail extends React.Component {
    render() {
        return this.props.image;
    }
}

export default ImageThumbnail;