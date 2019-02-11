import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

class HeaderContainer extends React.Component {
    render() { 
    
    return(
        <div className="header">
        <ImageThumbnail thumbnail={this.props.headerInfo.thumbnail} />

        <div className="header-content">
        <HeaderTitle title = {this.props.headerInfo.title} />
        <HeaderContent content = {this.props.headerInfo.content} />

        </div>
        
        </div>
        );
    }
}

export default HeaderContainer;
