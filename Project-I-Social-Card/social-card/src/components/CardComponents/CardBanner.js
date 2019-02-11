import React from 'react';
import './Card.css';
import CardContainer from './CardContainer';

class CardBanner extends React.Component {
    render(){
        return this.props.bannerImage; 
    }
}

export default CardBanner;