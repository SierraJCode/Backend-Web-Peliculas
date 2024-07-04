import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    producer: string;

    @Prop({required: true})
    time: string;

    @Prop({required: true})
    image: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
