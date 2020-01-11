import React from 'react';
import ReactDOM from 'react-dom';
import Warthog from './Warthog.js';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from './Store.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-table/react-table.css';

ReactDOM.render(
  <Provider store={Store}>
    <HashRouter>
      <Warthog />
    </HashRouter>
  </Provider>,
  document.getElementById('warthog')
);
