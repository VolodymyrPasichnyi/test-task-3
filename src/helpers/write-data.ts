import * as fs from 'fs/promises';
import { Note } from '../notes/interfaces/notes.interface';

const dataFilePath = 'src/notes/data/notes.data.ts';

export async function appendDataToFile(note: Note) {
    try {
        await fs.appendFile(dataFilePath, JSON.parse(`${note}`));
    } catch (error) {
        console.log(error.message);
    }
}
