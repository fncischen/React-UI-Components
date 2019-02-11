import React from 'react';
import './Header.css';

class ImageThumbnail extends React.Component {
    render() {
        return <img> {this.props.image} </img>;
    }
}