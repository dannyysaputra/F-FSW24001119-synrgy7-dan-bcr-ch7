import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import SearchCars from './pages/SearchCars';
import Cars from './pages/Cars';
import './style.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='cari-mobil' element={<SearchCars />} />
          <Route path='cars' element={<Cars />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
