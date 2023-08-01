import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './interfaces/notes.interface';
import { CreateNoteDto } from './dto/CreateNote.dto';
import { UpdateNoteDto } from './dto/UpdateNote.dto';

export type CreateNoteData = Omit<CreateNoteDto, 'id' | 'dates' | 'data'>;

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Post()
    createNote(@Body() note: CreateNoteData) {
        return this.notesService.create(note);
    }

    @Delete(':id')
    removeItem(@Param('id') id: string) {
        return this.notesService.delete(id);
    }

    @Patch(':id')
    editItem(
        @Param('id') id: string,
        @Body() updatedNoteData: UpdateNoteDto,
    ): Note {
        return this.notesService.patch(id, updatedNoteData);
    }

    @Get(':id')
    getItemById(@Param('id') id: string): Note {
        return this.notesService.getById(id);
    }

    @Get()
    getAllItem(): Note[] {
        return this.notesService.getAll();
    }
}
