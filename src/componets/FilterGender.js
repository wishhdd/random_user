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
      <div class="custom-radio">
        <div>
          <input
            id="allGender"
            type="radio"
            name="gender"
            value="allGender"
            defaultChecked
            onClick={handlerCheckBox}
          />
          <label for="allGender">
            <span></span>Все
          </label>
        </div>
        <div>
          <input id="female" type="radio" name="gender" value="female" onClick={handlerCheckBox} />
          <label for="female">
            <span></span>Только женщины
          </label>
        </div>
        <div>
          <input id="male" type="radio" name="gender" value="male" onClick={handlerCheckBox} />
          <label for="male">
            <span></span>Только мужчины
          </label>
        </div>
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
