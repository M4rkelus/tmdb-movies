import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';
import MoviesPage from '../../pages/MoviesPage/MoviesPage.component';
import ActorsPage from '../../pages/ActorsPage/ActorsPage.component';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage.component';
import ActorDetailsPage from '../../pages/ActorDetailsPage/ActorDetailsPage.component';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.component';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/movies' />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movie/:id' element={<MovieDetailsPage />} />
          <Route path='/actors' element={<ActorsPage />} />
          <Route path='/person/:id' element={<ActorDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default App;
