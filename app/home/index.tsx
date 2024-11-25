import MainSlideshow from '@/presentation/components/movies/MainSlideshow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'
import { useMovies } from '@/presentation/hooks/useMovies'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies()

  if(nowPlayingQuery.isLoading){
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color="#999999" size={30} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>
        {/*/ Carrusel */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        {/*/ Horizontal Populares */}
        <MovieHorizontalList title='Populares' className='mb-5' movies={ popularQuery.data ?? [] } />
        {/*/ Horizontal Mejor calificadas */}
        <MovieHorizontalList title='Mejor calificadas (infinite scroll)' className='mb-5' movies={ topRatedQuery.data?.pages.flat() ?? [] } loadNextPage={ topRatedQuery.fetchNextPage } />
        {/*/ Horizontal Proximamente */}
        <MovieHorizontalList title='Próximamente' className='mb-5' movies={ upcomingQuery.data ?? [] } />
      </View>
    </ScrollView>
  )
}

export default HomeScreen