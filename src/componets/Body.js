import React, { useEffect } from "react";
import { Card } from "./Card";
import { connect } from "react-redux";
import {
  localLoadUsers,
  loadUsers,
  moreLoadUsers,
  filterUsers,
  loadUsersStart,
} from "../store/actions";

const Body = (state) => {
  useEffect(() => {
    localStorage.getItem("randomUser") ? state.localLoadUsers() : state.loadUsers();
  }, []);

  useEffect(() => {
    if (state.state.randomUser.loading) {
      state.moreLoadUsers();
    }
  }, [state.state.randomUser.loading]);

  useEffect(() => {
    state.filterUsers(state.state.randomUser);
  }, [state.state.randomUser.users]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      50
    ) {
      state.loadUsersStart();
    }
  };

  return (
    <div className="cards  colCard">
      {state.state.randomUser.firstLaunch
        ? "... Loading ..."
        : state.state.randomUser.filteredUsers.map((user) => {
            return <Card user={user} key={user.dob.date} />;
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
  moreLoadUsers,
  filterUsers,
  loadUsersStart,
};

export default connect(mapStateToProps, mapDispathToProps)(Body);
