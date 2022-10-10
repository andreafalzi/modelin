import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer.component';
import Navigation from './components/Navigation/Navigation.component';
import Home from './routes/Home/Home';
import Portfolio from './routes/Portfolio/Portfolio';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        {/* <Route path='about' element={<About />} /> */}
        {/* <Route path='contact' element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
