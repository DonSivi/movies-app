import { useWindowDimensions, View, Text } from 'react-native'
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import { useRef } from 'react'
import MoviePoster from './MoviePoster'

interface Props{
    movies: Movie[]
}

const MainSlideshow = ({movies}:Props) => {

    // Necesario para el Carousel
    const ref = useRef<ICarouselInstance>(null)

    // Ancho del dispositivo así esté vertical u horizontal
    const width = useWindowDimensions().width

    return (
        <View className='h-[250px] w-full'>
            <Carousel 
                ref={ref}
                data={movies}
                renderItem={ ({item}) => <MoviePoster id={item.id} poster={item.poster} /> } 
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mode='parallax'
                modeConfig={{
                    // Esto no es necesario, es para saber que se puede modificar valores del "mode"
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                // 0 sería el primer elemento, 1 el segundo, etc
                defaultIndex={1}
            />
        </View>
    )
}

export default MainSlideshow