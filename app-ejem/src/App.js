//import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import StudenList from './componentes/StudenList';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container fluid>
      
        <Header/>
        <StudenList/>
        <Footer/>

    </Container>
  );
}

export default App;
