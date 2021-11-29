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
        <input
          type="checkbox"
          name="age"
          value="age0_18"
          defaultChecked
          id="age0_18"
          onClick={handlerCheckBox}
          className="col"
        />
        <label for="age0_18" className="col">
          0-18
        </label>
        <input
          type="checkbox"
          name="age"
          value="age19_35"
          defaultChecked
          id="age19_35"
          onClick={handlerCheckBox}
          className="col"
        />
        <label for="age19_35" className="col">
          18-35
        </label>
        <input
          type="checkbox"
          name="age"
          value="age36_65"
          defaultChecked
          id="age36_65"
          onClick={handlerCheckBox}
          className="col"
        />
        <label for="age36_65" className="col">
          35-65
        </label>
        <input
          type="checkbox"
          name="age"
          value="age65"
          defaultChecked
          id="age65"
          onClick={handlerCheckBox}
          className="col"
        />
        <label for="age65" className="col">
          65+
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
