function Reducer(state, action) {
  if (state === undefined) {
    return {
      login: false,
      name: "익명",
    };
  }
  const newState = { ...state };
  switch (action.type) {
    case "LOGIN":
      newState.login = true;
      newState.name = action.name;
      return newState;
    case "LOGOUT":
      newState.login = false;
      return newState;
    default:
      return newState;
  }
}

export default Reducer;
