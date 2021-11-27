import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/rootReducer";
import UpBar from "./componets/UpBar";
import Body from "./componets/Body";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <UpBar />
      <Body />
    </Provider>
  );
}

export default App;
