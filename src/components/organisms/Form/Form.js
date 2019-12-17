import React from 'react'
import Field from '../../molecules/Field/Field'

import './Form.css'

import * as fieldsName from '../../../config'

import { 
    CARD_NUMBER_FIELD_NAME, 
    CARD_HOLDER_FIELD_NAME,
    CARD_CVV_FIELD_NAME,
    MONTH_STATE_NAME,
    YEAR_STATE_NAME
} from '../../../config'

const defaultOption = (value, text) => ({ value , text , disabled : true })

const months = [ defaultOption('MM', MONTH_STATE_NAME), '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ]
const years  = [ defaultOption('YY', YEAR_STATE_NAME), '20', '21', '22', '23', '24', '25' ]

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        Object.keys(fieldsName).forEach(name => {
            this[fieldsName[name]] = React.createRef()
        })
    }

    componentDidUpdate() {
        if (this.props.focusedInput)
            this[this.props.focusedInput].current.focus()
    }
    
    render() {
        let { onChange : onEditCard, onClick : onClickField, cardNumber, holderName } = this.props;

        
        const onChange = (e) => {
            let updatedState;
            
            let value = e.target.value;

            switch(e.target.name) {
                case CARD_NUMBER_FIELD_NAME : 
                    if([4, 9, 14].includes(value.length) ) {
                        value = value + ' '
                    }
                    updatedState = 'cardNumber';
                    break;
                
                case CARD_HOLDER_FIELD_NAME : 
                    updatedState = 'holderName';
                    break;
                
                case MONTH_STATE_NAME :
                    updatedState = MONTH_STATE_NAME
                    break;
                
                case YEAR_STATE_NAME :
                    updatedState = YEAR_STATE_NAME
                    break;
                
                case CARD_CVV_FIELD_NAME : 
                    updatedState = CARD_CVV_FIELD_NAME;
                    break;
            }
                 
            onEditCard({ [updatedState] : value })
        }
    
        const onClick = (e) => {
            onClickField(e.target.name)
        }

        const onBlur = (e) => {
            onClickField(null)
        }

        return (
            <form className="card-from">
                <Field
                    ref={this[fieldsName.CARD_NUMBER_FIELD_NAME]} 
                    input="Text" 
                    onClick={onClick} 
                    onBlur={onBlur}
                    name={CARD_NUMBER_FIELD_NAME} 
                    type="text" 
                    onChange={onChange} 
                    label="Card Number" 
                    value={cardNumber}
                />

                <Field 
                    ref={this[fieldsName.CARD_HOLDER_FIELD_NAME]} 
                    input="Text" 
                    onClick={onClick} 
                    onBlur={onBlur}
                    name={CARD_HOLDER_FIELD_NAME} 
                    type="text" 
                    onChange={onChange} 
                    label="Card Holders" 
                    value={holderName}
                />
                
                <div className="card-form__date-cvv">
                    <div className="date card-form__date">
                        <Field 
                            ref={this[fieldsName.MONTH_STATE_NAME]}
                            label="Expires" 
                            className="date__field" 
                            input="Select" 
                            options={months} 
                            value={this.props[MONTH_STATE_NAME]} 
                            onChange={onChange} 
                            onClick={onClick} 
                            onBlur={onBlur}
                            name={MONTH_STATE_NAME} 
                        />

                        <Field 
                            ref={this[fieldsName.YEAR_STATE_NAME]}
                            className="date__field" 
                            input="Select" 
                            options={years} 
                            value={this.props[YEAR_STATE_NAME]} 
                            onChange={onChange} 
                            onClick={onClick} 
                            onBlur={onBlur}
                            name={YEAR_STATE_NAME} 
                        /> 
                    </div>
                    <Field 
                        ref={this[fieldsName.CARD_CVV_FIELD_NAME]} 
                        className="card-form__cvv" onClick={onClick} 
                        input="Text" 
                        name={CARD_CVV_FIELD_NAME} 
                        type="text" 
                        onChange={onChange} 
                        label="CVV" 
                        value={this.props[CARD_CVV_FIELD_NAME]}
                    />
                </div>
            </form>    
        )
    }
    
}