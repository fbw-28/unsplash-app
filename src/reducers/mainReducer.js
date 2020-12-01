const initialState = {
  text: 'Steve the state master of Berlin',
  image: '',
};

const mainReducer = (state = initialState, action) => {
  console.log('Reducer is running');
  if (action.type === 'UPDATE_TEXT') {
    console.log('I am the reducer for', action);
    return Object.assign({}, state, {
      text: action.payload,
    });
  }

  if (action.type === 'UPDATE_IMAGE') {
    console.log('I am the reducer for', action);
    return Object.assign({}, state, {
      image: action.payload,
    });
  }

  return state;
};

export default mainReducer;
