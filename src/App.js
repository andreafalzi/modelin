import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer.component';
import Navigation from './components/Navigation/Navigation.component';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Error404 from './routes/Error404/Error404';
import Home from './routes/Home/Home';
import Portfolio from './routes/Portfolio/Portfolio';
import PortfolioID from './routes/PortfolioID/PortfolioID';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://modelin.webmcdm.dk/portfolios';
    // const options = {
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // };

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' data={data} element={<Portfolio />} />
        <Route path='portfolio/:id' data={data} element={<PortfolioID />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
