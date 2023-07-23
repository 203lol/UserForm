import React from 'react'

const RequiredLabel = ({labelValue}) => {
  return (
    <label>{labelValue} <span style={{color:"red"}}>*</span> : </label>
  )
}

export default RequiredLabel
