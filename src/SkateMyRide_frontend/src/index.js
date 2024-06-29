import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RideProvider } from './RideContext';

ReactDOM.render(
  <React.StrictMode>
    <RideProvider>
      <App />
    </RideProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
