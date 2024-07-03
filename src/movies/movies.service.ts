import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './movie.schema';
import { CreateMovieDTO } from './movie.dto';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {

    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>){}

    async findAll(){
        return this.movieModel.find();
    };

    async findOne(id:string){
        return this.movieModel.findById(id)
    }

    async create(createMovieDTO: CreateMovieDTO){
        const movie = new this.movieModel(createMovieDTO);
        return movie.save();
    }

    async update(id: string, createMovieDTO:CreateMovieDTO){
        return this.movieModel.findByIdAndUpdate(id, createMovieDTO, { new:true }).exec();
    }
}
