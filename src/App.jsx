import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Results from './components/Results'

const App = () => {
  return (
    <>
      <Header />
      <main className=' mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Results />
      </main>
    </>
  )
}

export default App