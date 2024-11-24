import { Stack } from 'expo-router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import "../global.css";

const RootLayout = () => {

  // TanStackQuery: Cliente que se encargará de cachear todas las peticiones asíncronas
  const queryClient = new QueryClient()

  return (
    // TanStackQuery: Envoltorio de QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
        headerShown: false
      }} />
    </QueryClientProvider>
  )
}

export default RootLayout