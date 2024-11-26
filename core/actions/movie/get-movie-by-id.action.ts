import { movieApi } from "@/core/api/movie-api"
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface"
import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-movie.response"
import { MovieMaper } from "@/infraestructure/mappers/movie.mapper"

export const getMovieByIdAction = async(id:number | string): Promise<CompleteMovie> => {
    try{
        
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
        
        console.log('Película cargada')

        return MovieMaper.fromTheMovieDBToCompleteMovie(data)

    }catch(error){
        console.log(error)
        throw 'Cannot load now playing movies'
    }
}