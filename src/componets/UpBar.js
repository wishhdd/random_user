import React, { useEffect } from "react";
import { connect } from "react-redux";
import FilterGender from "./filterGender";
import FilterAge from "./FilterAge";
import InputSearch from "./inputSearch";
import GetRandomUser from "./GetRandomUser";
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
    <>
      <div>
        <GetRandomUser />
        <InputSearch />
      </div>
      <div>
        <FilterGender />
        <FilterAge />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispathToProps = { filterUsers };

export default connect(mapStateToProps, mapDispathToProps)(UpBar);
