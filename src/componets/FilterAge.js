import React from "react";
import { connect } from "react-redux";
import { setFilterAge } from "../store/actions";

const FilterAge = (state) => {
  const handlerCheckBox = (event) => {
    state.setFilterAge(event.target);
  };
  return (
    <div>
      <strong>Фильтр по возрастным группам</strong>
      <label>
        <input
          type="checkbox"
          name="age"
          value="age0_18"
          defaultChecked
          onClick={handlerCheckBox}
        />
        0-18
      </label>
      <label>
        <input
          type="checkbox"
          name="age"
          value="age19_35"
          defaultChecked
          onClick={handlerCheckBox}
        />
        19-35
      </label>
      <label>
        <input
          type="checkbox"
          name="age"
          value="age36_65"
          defaultChecked
          onClick={handlerCheckBox}
        />
        36-65
      </label>
      <label>
        <input type="checkbox" name="age" value="age65" defaultChecked onClick={handlerCheckBox} />
        66+
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
  setFilterAge,
};
export default connect(mapStateToProps, mapDispathToProps)(FilterAge);
