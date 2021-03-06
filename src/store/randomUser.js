import {
  IS_USERS_START_LOADING,
  IS_USERS_FINISH_LOADING,
  SET_GENDER,
  SET_AGE,
  SET_WORD,
  SET_FILTERED_USERS,
  ADD_USERS_STORE,
  FIRST_LAUNCH,
} from "./types";

const randomUserState = {
  firstLaunch: false,
  loading: false,
  users: [],
  filteredUsers: [],
  filterGender: "allGender",
  filterAge: { age0_18: true, age19_35: true, age36_65: true, age65: true },
  textSearch: "",
};

export const randomUserReducer = (state = randomUserState, action) => {
  switch (action.type) {
    case IS_USERS_START_LOADING:
      return { ...state, loading: true };
    case FIRST_LAUNCH:
      return { ...state, firstLaunch: true };
    case IS_USERS_FINISH_LOADING:
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
        loading: false,
        firstLaunch: false,
      };
    case ADD_USERS_STORE:
      return {
        ...state,
        users: state.users.concat(action.payload),
        loading: false,
      };
    case SET_GENDER:
      return {
        ...state,
        filterGender: action.gender,
      };
    case SET_AGE:
      return {
        ...state,
        filterAge: { ...state.filterAge, [action.ageFilter[0]]: action.ageFilter[1] },
      };
    case SET_WORD:
      return {
        ...state,
        textSearch: action.word,
      };
    case SET_FILTERED_USERS:
      return {
        ...state,
        filteredUsers: action.filteredUsers,
      };
    default:
      return state;
  }
};
