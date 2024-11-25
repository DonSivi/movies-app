import { Movie } from '@/infraestructure/interfaces/movie.interface'
import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import MoviePoster from './MoviePoster'
import { useRef } from 'react'

interface Props {
    title?: string
    movies: Movie[],
    className?: string
    loadNextPage?: () => void
}

const MovieHorizontalList = ({title, movies, className, loadNextPage}:Props) => {

  const isLoading = useRef(false)

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current) return

    // contentSize = tamaño del contenido, layoutMeasurement = Lo que vemos en pantalla, contentOffset = posicion actual en el scroll
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent

    // Determina si ya estoy cerca del final del scroll
    const isEndRechead = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

    // Si no hemos llegado al final, no hay nada que hacer
    if(!isEndRechead) return

    // Si llegué al final cambio a TRUE
    isLoading.current = true

    //ToDo: 
    console.log('Cargar siguientes películas')
    // Si enviaron funcion loadNextPage entonces la ejecuto
    loadNextPage && loadNextPage()
  }

  return (
    <View className={`${className}`}>
      <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
      <FlatList 
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        onScroll={onScroll}
      />
    </View>
  )
}

export default MovieHorizontalList