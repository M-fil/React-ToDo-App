import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from "./App";
import Footer from "./Footer";

ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(<Footer />, document.querySelector("footer"));

serviceWorker.unregister();
