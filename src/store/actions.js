import {
  IS_USERS_START_LOADING,
  IS_USERS_FINISH_LOADING,
  SET_GENDER,
  SET_AGE,
  SET_WORD,
  SET_FILTERED_USERS,
} from "./types";
import axios from "axios";

export function loadUsers() {
  return async (dispatch) => {
    dispatch(loadUsersStart());
    const response = await axios.get("https://randomuser.me/api/?results=30");
    localStorage.setItem("randomUser", JSON.stringify(response.data));
    dispatch(loadUsersFinish(response.data));
  };
}

export function localLoadUsers() {
  return (dispatch) => {
    dispatch(loadUsersStart());
    dispatch(loadUsersFinish(JSON.parse(localStorage.getItem("randomUser"))));
  };
}

function loadUsersStart() {
  return {
    type: IS_USERS_START_LOADING,
  };
}

function loadUsersFinish(users) {
  return {
    type: IS_USERS_FINISH_LOADING,
    payload: users.results,
  };
}

export function setGender(gender) {
  return (dispatch) => {
    dispatch({
      type: SET_GENDER,
      gender: gender,
    });
  };
}

export function setFilterAge(age_filter) {
  return (dispatch) => {
    dispatch({
      type: SET_AGE,
      ageFilter: [age_filter.value, age_filter.checked],
    });
  };
}

export function textSearch(text) {
  return (dispatch) => {
    dispatch({
      type: SET_WORD,
      word: text,
    });
  };
}

export function filterUsers(state) {
  let filteredUsers = filterUsersByText(state);
  filteredUsers = filterUsersByGender(filteredUsers, state.filterGender);
  filteredUsers = filterUsersByAge(filteredUsers, state.filterAge);

  return (dispatch) => {
    dispatch({
      type: SET_FILTERED_USERS,
      filteredUsers: filteredUsers,
    });
  };
}

function filterUsersByText(state) {
  const filteredUsers = state.users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(state.textSearch.toLowerCase()) ||
      user.name.last.toLowerCase().includes(state.textSearch.toLowerCase()) ||
      user.location.city.toLowerCase().includes(state.textSearch.toLowerCase()) ||
      user.location.country.toLowerCase().includes(state.textSearch.toLowerCase())
  );
  return filteredUsers;
}

function filterUsersByGender(users, gender) {
  return users.filter((user) => user.gender === gender || gender === "allGender");
}

function filterUsersByAge(users, age_filter) {
  let usersByFilter = users.filter((user) => {
    if (age_filter.age0_18 && 0 <= +user.dob.age && +user.dob.age <= 18) {
      return true;
    }
    if (age_filter.age19_35 && 19 <= +user.dob.age && +user.dob.age <= 35) {
      return true;
    }
    if (age_filter.age36_65 && 36 <= +user.dob.age && +user.dob.age <= 65) {
      return true;
    }
    if (age_filter.age65 && 65 <= +user.dob.age) {
      return true;
    }
    return false;
  });
  return usersByFilter;
}
