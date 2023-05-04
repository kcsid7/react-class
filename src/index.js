import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppClass from "./AppClass";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppClass />, document.getElementById('root'));
registerServiceWorker();
