import React from "react";
import { connect } from "react-redux";
import { loadUsers } from "../store/actions";

const GetRandomUser = (state) => {
  const handlerButton = () => {
    state.loadUsers();
  };
  return <button onClick={handlerButton}>RandomUser</button>;
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispathToProps = { loadUsers };

export default connect(mapStateToProps, mapDispathToProps)(GetRandomUser);
