import { Note } from '../interfaces/notes.interface';

export const MockedData: Note[] = [
    {
        id: '1',
        name: 'Shopping List',
        date: '2021-04-20',
        category: 'Task',
        content: 'Tomatoes, bread',
    },
    {
        id: '2',
        name: 'The theory of evolution',
        date: '2021-04-24',
        category: 'Random Thought',
        content: 'The evolution...',
    },
    {
        id: '3',
        name: 'New Feature',
        date: '2021-04-29',
        category: 'Idea',
        content: 'Implement new...',
        dates: ['03.05.2021', '05.05.2021'],
    },
    {
        id: '4',
        name: 'William Gaddis',
        date: '2021-05-20',
        category: 'Quote',
        content: `Power doesn't co...`,
    },
    {
        id: '5',
        name: 'Books',
        date: '2021-03-20',
        category: 'Task',
        content: 'The Lean Startup',
    },
    {
        id: '6',
        name: 'Shopping List2',
        date: '2021-04-11',
        category: 'Task',
        content: 'Tomatoes',
    },
    {
        id: '7',
        name: 'Feature',
        date: '2021-12-20',
        category: 'Idea',
        content: 'bread',
    },
];
