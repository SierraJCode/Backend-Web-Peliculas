import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/moviesDB'), MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
