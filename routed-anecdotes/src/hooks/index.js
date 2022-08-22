import { useState } from 'react'

// Exercise 7.4
export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  // Exercise 7.5-7.6
  const reset = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    reset
  }
}

// modules can have several named exports
export const useAnotherHook = () => {
  // ...
}