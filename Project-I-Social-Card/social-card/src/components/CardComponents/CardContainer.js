import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

class CardContainer extends React.Component {
    render() {

        return (
            <div className="card">
                <CardBanner bannerImage = {this.props.cardInfo.bannerImage}/>
                <CardContent cardContent = {this.props.cardInfo.cardContent} />
            </div>
        );
    }
}

export default CardContainer;

