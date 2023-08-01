import { IsOptional, IsString } from 'class-validator';

export class UpdateNoteDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    category?: string;

    @IsString()
    @IsOptional()
    content?: string;

    @IsString({ each: true })
    @IsOptional()
    dates?: string[];
}
