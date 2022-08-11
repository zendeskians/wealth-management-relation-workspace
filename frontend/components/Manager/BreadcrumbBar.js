import React from 'react'
import { Breadcrumb } from './Breadcrumb'

const BreadcrumbBar = (props) => {


  return (
    <nav class=" w-full" style={{ borderBottom: '1px solid black'}}>
        <ol class="list-reset flex text-lg">
            <Breadcrumb id="1" isSelected={props.currentPath == "1"} name="Bob Tan"/>
            <Breadcrumb id="2" isSelected={props.currentPath == "2"} name="Henry Yap" />
            <Breadcrumb id="3" isSelected={props.currentPath == "3"} name="Alice Yeo" last="true" />
        </ol>
    </nav>
  )
}

export default BreadcrumbBar