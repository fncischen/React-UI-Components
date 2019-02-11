import React from 'react';
import './Header.css';

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

// place all relevant info here for 


ReactDOM.render(<HeaderContainer headerInfo={HEADERINFO} />, document.getElementById("root"))