import React, { useState, useLayoutEffect, useRef } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { data } from '../../constants/KanbanConstants'
import Card from './Card'

const Kanban = () => {
	const [kanbanData, setKanbanData] = useState(data);

	

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
    <DragDropContext onDragEnd={onDragEnd}>
			<div class="kanban">
				{
					data.map(section => (
						<Droppable key={section.id} droppableId={section.id}>
							{(provided) => (
								<div {...provided.droppableProps} class="kanban__section" ref={provided.innerRef}>
									<div class="kanban__section__title">
									  {section.title}
									</div>
									<div class="kanban__section__content">
										{
											section.tasks.map((task, index) => (
												<Draggable key={task.id} draggableId={task.id} index={index}>
													{(provided, snapshot) => (
														<div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} style={{...provided.draggableProps.style, opacity: snapshot.isDragging ? '0.5' : '1'}}>
															<Card>
																{task.title}
															</Card>
														</div>
													)}
												</Draggable>
											))
										}
										{provided.placeholder}
									</div>
								</div>
							)}
						</Droppable>
						
					))
				}
			</div>
    </DragDropContext>
  )
}

export default Kanban