import React from "react";
import { connect } from "react-redux";
import { setGender } from "../store/actions";

const FilterGender = (state) => {
  const handlerCheckBox = (event) => {
    state.setGender(event.target.value);
  };
  return (
    <div className="filterGender">
      <strong>Фильтр по полу</strong>
      <div>
        <label className="col">
          <input
            className="inputA"
            type="radio"
            name="gender"
            value="allGender"
            defaultChecked
            onClick={handlerCheckBox}
          />
          <span className="filterText">Все</span>
        </label>
        <label className="col">
          <input type="radio" name="gender" value="female" onClick={handlerCheckBox} />
          <span className="filterText">Только женщины</span>
        </label>
        <label className="col">
          <input type="radio" name="gender" value="male" onClick={handlerCheckBox} />
          <span className="filterText">Только мужчины</span>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispathToProps = {
  setGender,
};

export default connect(mapStateToProps, mapDispathToProps)(FilterGender);
