import React from 'react'

import Image from '../../atoms/Image/Image';

import { 
    CARD_NUMBER_FIELD_NAME, 
    CARD_HOLDER_FIELD_NAME,
    CARD_CVV_FIELD_NAME,
    MONTH_STATE_NAME,
    YEAR_STATE_NAME
} from '../../../config'

import './CreditCard.css'

export default function(props) {

    let { cardNumber, holderName, cvv, month, year, focusedInput, onClick } = props;

    let accountDigits = [...cardNumber.split(''), ...Array(16 - cardNumber.length ).fill('#') ]

    const onClickField = e => {
        console.log('hhh')
        console.log(e)
    }
    return (
        <div className="credit-card">
            <div className="credit-card__header">
                <Image className="credit-card__logo" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"/>
                <Image className="credit-card__logo" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"/>
            </div>
            <div onClick={onClick.bind(this, CARD_NUMBER_FIELD_NAME)} className={`${ focusedInput === CARD_NUMBER_FIELD_NAME && 'credit-card__field_selected' } credit-card__number`}> { accountDigits.map((digit, index) => <span className="credit-card__field" key={index}> { digit } </span>) } </div>
            <div className="credit-card__footer">
                <div onClick={onClick.bind(this, CARD_HOLDER_FIELD_NAME)} className={`${ focusedInput === CARD_HOLDER_FIELD_NAME && 'credit-card__field_selected' } credit-card__holder`}>
                    <h6 className="label"> Card Holder </h6>
                    <p className="credit-card__field"> { holderName.toUpperCase() } </p>
                </div>
                <div  onClick={onClick.bind(this, MONTH_STATE_NAME)} className={`${ (focusedInput === MONTH_STATE_NAME || focusedInput === YEAR_STATE_NAME) && 'credit-card__field_selected' } credit-card__expires`}> 
                    <h6 className="label">Expires</h6>
                    <p className="credit-card__field"> { month }/{ year } </p> 
                </div>
            </div>
            {/*<div> { cvv } </div> */}
        </div>
    ) 
}