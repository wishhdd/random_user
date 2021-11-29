import React from "react";
import { connect } from "react-redux";
import { textSearch } from "../store/actions";
import { ReactComponent as SearchIcon } from "../resources/search_icon.svg";

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
      <SearchIcon style={{ height: "20px", width: "20px", fill: "#c5c5c5" }} />
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
