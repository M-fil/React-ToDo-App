import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.css';

import App from "./components/app/App";
import Footer from "./components/footer/Footer";

ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(<Footer />, document.querySelector("#footer"));

serviceWorker.unregister();
