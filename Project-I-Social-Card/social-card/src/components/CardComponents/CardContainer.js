import React from 'react';
import './Card.css';

class CardContainer extends React.Component {
    render() {
        return(
            <div>
                <CardBanner bannerImage = {this.bannerImage}/>
                <CardContent cardContent = {this.cardCopy} />
            </div>
        );
    }
}


ReactDOM.render(<CardContainer cardInfo={CARDINFO} />, document.getElementById("root"))