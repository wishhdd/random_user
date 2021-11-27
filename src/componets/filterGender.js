import React from "react";
import { connect } from "react-redux";
import { setGender } from "../store/actions";

const FilterGender = (state) => {
  const handlerCheckBox = (event) => {
    state.setGender(event.target.value);
  };
  return (
    <div>
      <strong>Фильтр по полу</strong>
      <label>
        <input
          type="radio"
          name="gender"
          value="allGender"
          defaultChecked
          onClick={handlerCheckBox}
        />
        Все
      </label>
      <label>
        <input type="radio" name="gender" value="female" onClick={handlerCheckBox} />
        Только женщины
      </label>
      <label>
        <input type="radio" name="gender" value="male" onClick={handlerCheckBox} />
        Только мужчины
      </label>
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
