import React, { useEffect } from "react";
import { Card } from "./Card";
import { connect } from "react-redux";
import { localLoadUsers, loadUsers } from "../store/actions";

const Body = (state) => {
  useEffect(() => {
    localStorage.getItem("randomUser") ? state.localLoadUsers() : state.loadUsers();
  }, []);
  return (
    <div>
      {state.state.randomUser.filteredUsers.map((user) => {
        return (
          <div key={user.dob.date}>
            <Card user={user} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispathToProps = {
  localLoadUsers,
  loadUsers,
};

export default connect(mapStateToProps, mapDispathToProps)(Body);
