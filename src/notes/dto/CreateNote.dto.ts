import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateNoteDto {
    @IsString()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDate()
    date: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString({ each: true })
    dates?: string[];
}
