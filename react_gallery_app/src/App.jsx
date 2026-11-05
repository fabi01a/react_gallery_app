import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Search from './components/Search';


function App() {
  const location = useLocation();

  return (
    <div className='container' >
      <Search key={location.pathname}/>
      <Nav />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/:category" element={<Gallery />} />
        <Route path="/search/:query" element={<Gallery />} />
        <Route path="*" element={<h2>404-Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;