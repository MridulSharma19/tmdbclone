// import logo from './logo.svg';
// import {useState} from 'react'
import './App.css';
import Header from './components/header/header'
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
import MoviesPage from './pages/movies/movies'
import TVPage from './pages/tvpage/tvpage'
import MovieDetail from './pages/movies/moviedetail'
import TVDetail from './pages/tvpage/tvdetail'
import SearchPage from './pages/searchpage/searchpage'

function App() {
  
  return (
    <div className="App">
      
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movie' component={MoviesPage} />
        <Route exact path='/tv' component={TVPage} />
        <Route  path='/movie/:id' component={MovieDetail} />
        <Route exact path='/tv/:id' component={TVDetail} />
        <Route path='/search/:query' component={SearchPage}/>          
      </Switch>
    </div>
  );
}

export default App;
