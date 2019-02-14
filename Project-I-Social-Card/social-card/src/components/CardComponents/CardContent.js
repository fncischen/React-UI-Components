import React from 'react';
import './Card.css';
import CardContainer from './CardContainer';

class CardContent extends React.Component {
    render() {
        return this.props.cardContent;
    }
}

export default CardContent;
