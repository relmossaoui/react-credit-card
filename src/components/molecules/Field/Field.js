import React from 'react'
import './Field.css'

import * as Inputs from '../../atoms/Inputs/Inputs'

export default React.forwardRef((props, ref) => {
    let { input, label, className, ...attrs } = props

    let Field = Inputs[input]

    return (
        <div className={`${className} field`}>
            { label && <Inputs.Label style={{marginBottom : '7px'}}> { label } </Inputs.Label>}
            <Field { ...attrs } ref={ref} />
        </div>
    )
})