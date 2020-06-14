import React from 'react';
import ReactDOM from 'react-dom';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
