import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    Productor: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
