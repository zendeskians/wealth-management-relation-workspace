import React from 'react'

export const Breadcrumb = (props) => {

  return (
      <>
        <li><a href={"/management/" + props.id} class={ props.isSelected ? "text-blue-600 hover:text-blue-700" : "text-black"}>{props.name}</a></li>
        {!props.last ? <li><span class="text-gray-500 mx-2">/</span></li> : ''}
      </>
  )
}
