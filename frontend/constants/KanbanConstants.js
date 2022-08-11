import {v4 as uuidv4} from 'uuid'

export const data = [
    {
        id: uuidv4(),
        title: "To do",
        tasks: [
            {
                id: uuidv4(),
                title: "Learn JavaScript",
                priority: 0,
                chat: 10,
                attachment: 5
            },
            {
                id: uuidv4(),
                title: "Learn Git",
                priority: 2,
                chat: 1,
                attachment: 3
            },
            {
                id: uuidv4(),
                title: "Learn Python",
                priority: 0,
                chat: 3,
                attachment: 5
            }
        ]
    },
    {
        id: uuidv4(),
        title: "In Progress",
        tasks: [
            {
                id: uuidv4(),
                title: "Learn CSS",
                priority: 1,
                chat: 7,
                attachment: 5
            },
            {
                id: uuidv4(),
                title: "Learn Golang",
                priority: 0,
                chat: 2,
                attachment: 6
            }
        ]
    },
    {
        id: uuidv4(),
        title: "Completed",
        tasks: [
            {
                id: uuidv4(),
                title: "Learn HTML",
                priority: 2,
                chat: 7,
                attachment: 2
            }
        ]
    }
]