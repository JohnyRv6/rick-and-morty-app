import React from 'react'
import Home from './pages/Home'
import CharacterList from './components/CharacterList/CharacterList'
import CharacterDetail from './components/CharacterDetail/CharacterDetail'
import CharacterVisualization from './components/CharacterVisualization/CharacterVisualization'
import { QueryClientProvider, QueryClient } from 'react-query'
import './App.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1
    }
  }
})

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Home>
          <CharacterList />
          <CharacterDetail />
          <CharacterVisualization />
        </Home>
      </div>
    </QueryClientProvider>
  )
}

export default App
