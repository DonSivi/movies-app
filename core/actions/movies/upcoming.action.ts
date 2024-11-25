import { movieApi } from "@/core/api/movie-api"
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response"
import { MovieMaper } from "@/infraestructure/mappers/movie.mapper"

export const upcomingAction = async() => {
    try{
        
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming')
        // Esto es lo mismo, una forma corta cuando el parámetro es el mismo
        //const movies = data.results.map((movie) => MovieMaper.fromTheMovieDBToMovie(movie))
        const movies = data.results.map(MovieMaper.fromTheMovieDBToMovie)

        return movies

    }catch(error){
        console.log(error)
        throw 'Cannot load now playing movies'
    }
}