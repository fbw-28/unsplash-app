import { getRandomUnsplash } from '../helpers/apiCalls';

// SIMPLE ACTION
export const updateText = (payload) => {
  console.log('Somebody triggered an action:', payload);
  return {
    type: 'UPDATE_TEXT',
    payload,
  };
};

// ASYNC WITH THUNK
export const updateImage = () => {
  return async (dispatch) => {
    let image = await getRandomUnsplash();

    dispatch({
      type: 'UPDATE_IMAGE',
      payload: image,
    });
  };
};
