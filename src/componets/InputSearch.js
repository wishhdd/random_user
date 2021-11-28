import React from "react";
import { connect } from "react-redux";
import { textSearch } from "../store/actions";

const InputSearch = (state) => {
  const handlerInput = (event) => {
    state.textSearch(event.target.value);
  };
  return (
    <div className="bord">
      <input
        type="text"
        className="input"
        placeholder="Начните вводить... "
        onChange={handlerInput}
      />
      <span>&#128269;</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispathToProps = { textSearch };

export default connect(mapStateToProps, mapDispathToProps)(InputSearch);
