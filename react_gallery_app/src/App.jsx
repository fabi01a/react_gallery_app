import './App.css'
import { Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Search from './components/Search';


function App() {
  return (
    <div className='container' >
      <h1>Image Gallery</h1>
      <Search />
      <Nav />
      <Routes>
        <Route path="/:category" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;