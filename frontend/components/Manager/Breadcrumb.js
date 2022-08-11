import React from 'react'

export const Breadcrumb = (props) => {

  return (
      <>
        <li class={ props.isSelected ? "selected tab" : "tab"}><a href={"/management/" + props.id}>{props.name}</a></li>
        {!props.last ? <li style={{transform: 'skew(-20deg)'}}><span class="text-gray-500 mx-2">/</span></li> : ''}
      </>
  )
}
