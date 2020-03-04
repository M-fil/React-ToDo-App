import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.css';

import App from "./components/app/App";

ReactDOM.render(<App />, document.querySelector("#root"));

serviceWorker.unregister();
