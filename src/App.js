import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';



function App() {
  return (
    <div className={'container-fluid pss m-auto'}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
