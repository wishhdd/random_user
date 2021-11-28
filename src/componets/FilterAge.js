import React from "react";
import { connect } from "react-redux";
import { setFilterAge } from "../store/actions";

const FilterAge = (state) => {
  const handlerCheckBox = (event) => {
    state.setFilterAge(event.target);
  };
  return (
    <div className="filtAge">
      <strong>Фильтр по возрастным группам</strong>
      <div className="row-2">
        <label className="col">
          <input
            type="checkbox"
            name="age"
            value="age0_18"
            defaultChecked
            onClick={handlerCheckBox}
          />
          <span className="filterText">0-18</span>
        </label>
        <label className="col">
          <input
            type="checkbox"
            name="age"
            value="age19_35"
            defaultChecked
            onClick={handlerCheckBox}
          />
          <span className="filterText">18-35</span>
        </label>
        <label className="col">
          <input
            type="checkbox"
            name="age"
            value="age36_65"
            defaultChecked
            onClick={handlerCheckBox}
          />
          <span className="filterText">35-65</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="age"
            value="age65"
            defaultChecked
            onClick={handlerCheckBox}
          />
          <span className="filterText">65+</span>
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
  setFilterAge,
};
export default connect(mapStateToProps, mapDispathToProps)(FilterAge);
