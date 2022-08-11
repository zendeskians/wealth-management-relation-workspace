import React from 'react'
import { ChatAlt2Icon, PaperClipIcon } from '@heroicons/react/outline'

const Card = (props) => {
  return (
    <div class="card shadow-md">
        <label class={`bg-gradient-to-r from-blue-500 to-blue-200 px-2 text-white py-1 rounded text-sm ${props.task.priority == 0 
            ? 'from-blue-500 to-blue-200' : 
            props.task.priority == 1 ? 'from-green-500 to-green-200' :
            'from-red-500 to-red-200'
        }`}>
            {            
                props.task.priority == 0 
                ? 'Low Priority' : 
                props.task.priority == 1 ? 'Medium Priority' :
                'High Priority'
            
            }
        
        </label>
        <div class="mt-3">{props.children}</div>
        <div class="flex justify-between">
            <div class="flex space-x-4 items-center">
                <span class="flex space-x-2 items-center">
                    <ChatAlt2Icon class="w-4 h-4 text-grey-400 mr-2"/> 
                    <span>{props.task.chat}</span>
                </span>
                <span class="flex space-x-2 items-center">
                    <PaperClipIcon class="w-4 h-4 text-grey-400 mr-2"/> 
                    <span>{props.task.attachment}</span>
                </span>
            </div>
        
        </div>
    </div>
  )
}

export default Card