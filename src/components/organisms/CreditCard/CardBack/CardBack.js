import React from 'react';
import Image from '../../../atoms/Image/Image';

import './CardBack.css'

export default function(props) {

    return (
        <React.Fragment>
            <div className="credit-card__band" />
            <div className="credit-card__cvv"> { props.cvv.replace(/[0-9]/g, '*') } </div>
            <div className="credit-card__cvv-header">
                <Image className="credit-card__logo" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"/>
            </div>
        </React.Fragment>
    )
}