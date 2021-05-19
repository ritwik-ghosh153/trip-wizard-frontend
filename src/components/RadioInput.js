import React from 'react'

const RadioInput = ({label, value, checked, setter}) => {
  return (
    <label className='form-check-label'>
        <input className='form-check-input' type="radio" checked={checked === value}
               onChange={() => setter(value)} />
        <span>{label}</span>
    </label>
  )
}

export default RadioInput
