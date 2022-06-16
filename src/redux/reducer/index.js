import {
  HOLA_MUNDO
} from '../actions/actions';

const initialState = {
  holaMundo: false
};

const rootReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case HOLA_MUNDO:
      return {
        ...state,
        holaMundo: !state.holaMundo
      }
    default:
      return state;
  }
}

export default rootReducer;