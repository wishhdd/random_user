import React, { useEffect } from "react";
import { connect } from "react-redux";
import FilterGender from "./FilterGender";
import FilterAge from "./FilterAge";
import InputSearch from "./InputSearch";
import { filterUsers } from "../store/actions";

const UpBar = (state) => {
  useEffect(() => {
    state.filterUsers(state.state.randomUser);
  }, [
    state.state.randomUser.filterGender,
    state.state.randomUser.filterAge,
    state.state.randomUser.textSearch,
  ]);
  return (
    <div className="upBar">
      <div className="Line pb-10">
        <InputSearch />
      </div>
      <div className="filter">
        <FilterGender />
        <FilterAge />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispathToProps = { filterUsers };

export default connect(mapStateToProps, mapDispathToProps)(UpBar);
