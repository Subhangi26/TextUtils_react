import React from 'react'

function Alert(props) {
  const tolower = (word)=> word.charAt(0).toUpperCase() + word.slice(1);
  return (
    <div style={{height:'50px'}}>
    {props.alert1 && <div className={`alert alert-${props.alert1.type} alert-dismissible fade show`} role="alert">
        <strong>{tolower(props.alert1.type)}</strong>{props.alert1.msg}
    </div>}
    </div>
  )
}

export default Alert
