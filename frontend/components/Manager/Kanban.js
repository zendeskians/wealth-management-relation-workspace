import React, { useState, useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { data } from '../../constants/KanbanConstants'
import { PlusCircleIcon } from '@heroicons/react/outline'
import Card from './Card'
import {v4 as uuid} from 'uuid'

const Kanban = () => {
	const [kanbanData, setKanbanData] = useState(data);
	const [ready, setReady] = useState(false);
	const [showForm, setShowForm] = useState(false);

	useEffect(()=>{
		if (process.browser){
			setReady(true)
		}
	}, [])

	function onTextAreaKeyPress(e){
		if (e.code === "Enter"){ //Enter
			if (e.target.value === 0){
				setShowForm(false);
			} else {
				const boardId = e.target.attributes["data-id"].value
				const item = {
					id: uuid(),
					title: e.target.value,
					priority: 0,
					chat: 0,
					attachment: 0
				}

				let newBoardData = data;
				newBoardData[boardId].tasks.push(item);
				setKanbanData(newBoardData);
				setShowForm(false);
				e.target.value="";
			}
		}
	}

	const onDragEnd = result => {
		if (!result.destination) return
		const { source, destination } = result

		if (source.droppableId !== destination.droppableId){
			const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
			const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

			const sourceCol = data[sourceColIndex]
			const destinationCol = data[destinationColIndex]

			const sourceTask = [...sourceCol.tasks]
			const destinationTask = [...destinationCol.tasks]

			const [removed] = sourceTask.splice(source.index, 1)
			destinationTask.splice(destination.index, 0, removed)

			data[sourceColIndex].tasks = sourceTask
			data[destinationColIndex].tasks = destinationTask

			setKanbanData(data)
		}
	}
  return (
		<>
    {ready && (<DragDropContext onDragEnd={onDragEnd}>
			<div class="kanban">
				{
					data.map((section, index) => (
						<Droppable key={section.id} droppableId={section.id}>
							{(provided) => (
								<div {...provided.droppableProps} class="kanban__section relative" ref={provided.innerRef}>
									<span class="w-full h-[5px] bg-gradient-to-r from-pink-700 to-red-200 absolute inset-x-0 top-0"></span>
									<div class="kanban__section__title text-white text-center">
									  {section.title}
									</div>
									<div class="kanban__section__content">
										{
											section.tasks.map((task, index) => (
												<Draggable key={task.id} draggableId={task.id} index={index}>
													{(provided, snapshot) => (
														<div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} style={{...provided.draggableProps.style, opacity: snapshot.isDragging ? '0.5' : '1'}}>
															<Card task={task}>
																{task.title}
															</Card>
														</div>
													)}
												</Draggable>
											))
										}
										{provided.placeholder}
									</div>
									{showForm ? (<div class="p-3">
										<textarea rows={3} class="border-gray-400 rounded focus:ring-purple-400"
										data-id={index}
										placeholder="Task Info" style={{backgroundColor: 'white'}}
										onKeyPress={(e)=>onTextAreaKeyPress(e)}>

										</textarea>
									</div>) : (<button class="mx-auto flex justify-center items-center text-center text-lg text-white mt-5" onClick={()=>{setShowForm(true)}}>
									<div class="text-center">Add Task</div>
									<PlusCircleIcon class="w-4 h-4 text-grey-500"/>
							</button>)}
								</div>
							)}
						</Droppable>

					))
				}
			</div>
    </DragDropContext>)}
		</>
  )
}

export default Kanban
