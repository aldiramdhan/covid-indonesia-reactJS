import logo from './logo.svg';
import './App.css';
import Header from './components/section/Header/Header';
import Hero from './components/section/Main/Hero';
import Stats from './components/section/Main/Stats';
import Form from './components/section/Main/Form';
import Footer from './components/section/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
