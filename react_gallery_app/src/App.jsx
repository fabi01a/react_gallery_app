import './App.css'
import { Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Nav from './components/Nav';


function App() {
  return (
    <div className='container' >
      <h1>Image Gallery</h1>
      <Nav />
      <Routes>
        <Route path="dogs" element={<Gallery />} />
        <Route path="cats" element={<Gallery />} />
        <Route path="birds" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;