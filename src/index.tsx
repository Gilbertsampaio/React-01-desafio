import React from "react";
import { render } from "react-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { App } from './App'

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT
};

const Home = () => (
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>
);

render(<Home />, document.getElementById('root'))