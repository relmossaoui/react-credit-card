import React from 'react'

import './Inputs.css'

/**
 * 
 * @param { Object   } props 
 * @param { String   } props.type
 * @param { String   } props.value 
 * @param { String   } props.name 
 * @param { function } props.onChange : 
 */
export const Text = React.forwardRef((props, ref) => (
    <input ref={ref} { ...props } className="input" autoComplete="off"/>  
))

/**
 * 
 * @param { Object   } props 
 * @param { String   } props.value 
 * @param { String   } props.name 
 * @param { function } props.onChange  
 */
export const Select = React.forwardRef((props, ref) => {
    let { options, ...attrs } = props;

    options = options.map(option => ( typeof option === 'object' ? option : { value : option, text : option } ) )
    
    return (
        <select ref={ref} { ...attrs } className="input">
            { options.map(({value, text, disabled}) => <option value={value} key={value} disabled={disabled}> { text } </option>)}
        </select>
    )
})

export function Label({children, ...attrs}) {
    return <label {...attrs} className="label"> { children } </label>
}

export function Button(props) {
    return <button { ...props }> { props.children } </button>
}

