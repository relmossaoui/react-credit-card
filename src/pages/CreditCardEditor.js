import React from 'react'
import './CreditCardEditor.css'

import Form from '../components/organisms/Form/Form'
import CreditCard from '../components/organisms/CreditCard/CreditCard'

import * as fieldsName from '../config'
import { 
    CARD_NUMBER_FIELD_NAME, 
    CARD_HOLDER_FIELD_NAME,
    CARD_CVV_FIELD_NAME,
    MONTH_STATE_NAME,
    YEAR_STATE_NAME
} from '../config'

export default class CreditCardEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cardNumber              : '',
            holderName              : 'Relmossaoui',
            [CARD_CVV_FIELD_NAME]   : '*****',
            [MONTH_STATE_NAME]      : 'MM',
            [YEAR_STATE_NAME]       : 'YY',
            focusedInput            : null
        }


        this.onChange = this.onChange.bind(this)
        this.onClick  = this.onClick.bind(this)
    }

    onChange(updatedState) {
        this.setState(updatedState)
    }

    onClick(focusedInput) {
        this.setState({focusedInput})
    }

    render() {

        return (
            <div className="credit-card-editor">
                <CreditCard { ...this.state } onClick={this.onClick} />
                <Form { ...this.state } onChange={this.onChange} onClick={this.onClick} />
            </div>
        )
    }
}