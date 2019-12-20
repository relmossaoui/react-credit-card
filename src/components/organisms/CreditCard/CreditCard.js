import React from 'react'

import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack'

import './CreditCard.css'



export default function(props) {
    let CardSide = props.isCardFrontActive ? <CardFront {...props} /> : <CardBack cvv={props.cvv} />

    return (
        <div className="credit-card">
            { CardSide}
        </div>
    )
}