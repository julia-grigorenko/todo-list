//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/"/>
        <Route path="/about" component={About} />
      </div>
    </Router>
    
  );
}

export default App;
