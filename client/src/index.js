// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
// registerServiceWorker();




import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();