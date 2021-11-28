import React, { useState, useEffect, useCallback } from "react";
import { Card } from "./Card";
import { connect } from "react-redux";
import { useLazyLoading } from "./useLazyLoading";
import { localLoadUsers, loadUsers } from "../store/actions";

const Body = (state) => {
  useEffect(() => {
    localStorage.getItem("randomUser") ? state.localLoadUsers() : state.loadUsers();
  }, []);
  //

  const [items, setItems] = useState(state.state.randomUser.filteredUsers);

  const appendItems = useCallback(() => {
    setItems([...items, ...Array(10).fill("").map()]);
  }, [items, setItems]);

  const [onScroll, containerRef] = useLazyLoading({
    onIntersection: appendItems,
    delay: 1200,
  });
  //
  return (
    <div className="cards filter" ref={containerRef} onScroll={onScroll}>
      {state.state.randomUser.filteredUsers.map((user) => {
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
};

export default connect(mapStateToProps, mapDispathToProps)(Body);
