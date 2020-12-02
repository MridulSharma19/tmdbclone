// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
import MoviesPage from './pages/movies/movies'
import TVPage from './pages/tvpage/tvpage'

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/movie' component={MoviesPage} />
        <Route exact path='/tv' component={TVPage} />          
      </Switch>
    </div>
  );
}

export default App;
