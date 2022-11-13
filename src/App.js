import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import AddMovies from './components/AddMovies/AddMovies';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/" element={<Movies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="addmovies" element={<AddMovies />} />
          <Route path="contact" element={<Contact/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
