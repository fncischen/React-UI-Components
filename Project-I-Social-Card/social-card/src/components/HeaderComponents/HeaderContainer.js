import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

class HeaderContainer extends React.Component {
    render() { 
    
    return(
        <div>
        <ImageThumbnail thumbnail={this.props.headerInfo.thumbnail} />
        <HeaderTitle title = {this.props.headerInfo.title} />
        <HeaderContent content = {this.props.headerInfo.content} />
        </div>
        );
    }
}

export default HeaderContainer;
