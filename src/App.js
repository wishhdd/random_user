import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/rootReducer";
import UpBar from "./componets/UpBar";
import Body from "./componets/Body";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function App() {
  return (
    <BrowserRouter basename={"/RandomUser"}>
      <Provider store={store}>
        <UpBar />
        <Body />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
