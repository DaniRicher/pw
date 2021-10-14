import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import StudenList from './componentes/StudenList';
function App() {
  return (
    <div className="App">
      <Header/>
      <StudenList/>
      <Footer/>
    </div>
  );
}

export default App;
