import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./store";
import "./styles.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Simple Gallery</h1>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
