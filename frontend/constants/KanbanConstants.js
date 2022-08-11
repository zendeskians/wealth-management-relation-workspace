import {v4 as uuidv4} from 'uuid'

export const data = [
    {
        id: uuidv4(),
        title: "To do",
        tasks: [
            {
                id: uuidv4(),
                title: "Call Bob to confirm investment plan",
                priority: 0,
                chat: 10,
                attachment: 5
            },
            {
                id: uuidv4(),
                title: "Double check Alice's signature on consent form",
                priority: 2,
                chat: 1,
                attachment: 3
            },
            {
                id: uuidv4(),
                title: "Group KPI meeting about Q3",
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
                title: "Present John with his wealth plan",
                priority: 1,
                chat: 7,
                attachment: 5
            },
            {
                id: uuidv4(),
                title: "1:1 session with the boss",
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
                title: "Lunch with new client",
                priority: 2,
                chat: 7,
                attachment: 2
            }
        ]
    }
]
