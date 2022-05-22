import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Search from './components/Search';
import { useContext} from 'react';
import { SearchContext } from './context/SearchContext';
import SearchPage from './pages/SearchPage';
import ItemPage from './pages/ItemPage'



function App() {

  const { setSearch } = useContext(SearchContext)
 
  

  return (
    <div className="App">
      <div className='App-container'>
        <BrowserRouter>
          <Header />
          <Search setSearch={setSearch} />
            <Routes>
              <Route path='/gif-center/' element={<Home />} />
                <Route path='/gif/:slug' element={<ItemPage />} />
                <Route path='/sticker/:slug' element={<ItemPage />} />
                <Route path='/emoji/:slug' element={<ItemPage />} />
                <Route path='/search/:search' element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
