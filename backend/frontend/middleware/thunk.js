const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    // debugger
    return action(dispatch, getState); //fn fires off ajax request
  } else { //ie this action is just a plain object
    // debugger
    return next(action); //pass action to next thing in our middleware
    // eventually, it will make its way to reducer
  }
};

export default thunk;
