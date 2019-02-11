import React from 'react';
import './Header.css';
import HeaderContainer from './HeaderContainer';

class ImageThumbnail extends React.Component {
    render() {
        return (<div className="header-thumbnail"> {this.props.thumbnail} </div>);

    }
}

export default ImageThumbnail;