import React from "react";
import { connect } from "react-redux";
import { textSearch } from "../store/actions";

const InputSearch = (state) => {
  const handlerInput = (event) => {
    // console.log(state.state);
    // console.log(event.target.value);
    state.textSearch(event.target.value);
  };
  return <input type="text" placeholder="Начните вводить..." onChange={handlerInput} />;
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispathToProps = { textSearch };

export default connect(mapStateToProps, mapDispathToProps)(InputSearch);
