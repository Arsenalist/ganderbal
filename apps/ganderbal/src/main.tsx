import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

export interface HCW {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  rating: number;
  content: string;
}

export interface Facilities {
  name: string;
  rating?: number;
  reviews?: Review[];
}
