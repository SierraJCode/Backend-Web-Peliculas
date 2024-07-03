import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    Productor: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
