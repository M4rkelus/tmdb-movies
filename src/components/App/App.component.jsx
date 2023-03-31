import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList.component';
import MovieDetails from '../MovieDetails/MovieDetails.component';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<MovieList category='popular' />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
