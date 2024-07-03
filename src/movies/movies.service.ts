import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './movie.schema';
//import { CreateMovieDTO } from './movie.dto';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {

    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>){}


}
