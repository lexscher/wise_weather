import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'Wise Weather';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();