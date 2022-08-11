import React from 'react'

const Card = (props) => {
  return (
    <div class="card">
        {props.children}
    </div>
  )
}

export default Card