import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

class HeaderContainer extends React.Component {
    render() { 
    
    return(
        <div>
        <ImageThumbnail thumbnail={this.props.thumbnail} />
        <HeaderTitle title = {this.props.title} />
        <HeaderContent content = {this.props.content} />
        </div>
        );
    }
}

export default HeaderContainer;
