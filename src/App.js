import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/'component={Home}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
