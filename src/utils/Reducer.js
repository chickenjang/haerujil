function Reducer(state, action) {
  if (state === undefined) {
    return {
      login: false,
    };
  }
  const newState = { ...state };
  switch (action.type) {
    case "LOGIN":
      newState.login = true;
      return newState;
    default:
      return newState;
  }
}

export default Reducer;
