import React from "react";
import { connect } from "react-redux";
import { loadUsers } from "../store/actions";

const GetRandomUser = (state) => {
  const handlerButton = () => {
    state.loadUsers();
  };
  return (
    <button
      className={`btn ${state.state.randomUser.loading ? "btn-load" : null}`}
      onClick={handlerButton}
    >
      {state.state.randomUser.loading ? <span> &#8635; Loading...</span> : "RandomUser"}
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispathToProps = { loadUsers };

export default connect(mapStateToProps, mapDispathToProps)(GetRandomUser);
