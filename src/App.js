import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Reactions from './pages/Reactions';
import Home from './pages/Home';
import Search from './components/Search';
import { useContext } from 'react';
import { SearchContext } from './context/SearchContext';
import { GifsContext } from './context/GifsContext';
import SearchPage from './pages/SearchPage';

function App() {

  const {search, setSearch} = useContext(SearchContext)
  const {gifs, setGifs} = useContext(GifsContext)

  return (
    <div className="App">
      <div className='App-container'>
        <BrowserRouter>
          <Header />
          <Search search={search} setSearch={setSearch} setGifs={setGifs} gifs={gifs}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reactions' element={<Reactions />} />
            <Route path='/search/:search' element={<SearchPage/>} />
          </Routes>
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
