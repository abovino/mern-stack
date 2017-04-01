// index.js responsbile for rendering all components

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root')
);