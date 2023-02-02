import './App.css';
import HeadCarousel from './components/Header/Carrousel';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <HeadCarousel />
      <Main />
    </div>
  );
}

export default App;
