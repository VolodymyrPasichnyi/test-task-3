import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { MockedData } from './data/notes.data';
import { Note } from './interfaces/notes.interface';
import { CreateNoteData } from './notes.controller';
import { UpdateNoteDto } from './dto/UpdateNote.dto';
// import { appendDataToFile } from '../helpers/write-data';

@Injectable()
export class NotesService {
    private mockedData: Note[] = MockedData;

    getById(id: string): Note {
        const note = this.mockedData.find((n) => n.id === id);
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        return note;
    }

    getAll(): Note[] {
        return this.mockedData;
    }

    create(note: CreateNoteData) {
        const newNote = {
            id: uuidv4(),
            date: new Date(),
            ...note,
        };
        this.mockedData.push(newNote);
        return newNote;
    }

    delete(id: string): Note {
        const index = this.mockedData.findIndex((n) => n.id === id);
        if (!index) {
            throw new NotFoundException('Note not found');
        }
        const deletedNote = this.mockedData.splice(index, 1)[0];
        return deletedNote;
    }

    patch(id: string, updatedNoteData: UpdateNoteDto): Note {
        const index = this.mockedData.findIndex((n) => n.id === id);
        if (!index) {
            throw new NotFoundException('Note not found');
        }
        const originalNote = this.mockedData[index];
        const updatedNote = {
            ...originalNote,
            ...updatedNoteData,
        };
        this.mockedData[index] = updatedNote;
        return updatedNote;
    }
}
