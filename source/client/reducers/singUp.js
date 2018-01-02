import { REQUEST_SINGUP, RECEIVE_SINGUP } from '../actions/singUpActions';

const initialState = {
  errors: {
    name: 'no esta',
    pass: 'falta la clave',
  },
  loading: false,
};


const singUp = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_SINGUP: {
      return Object.assign({}, state, {
        loading: !state.loading,
      });
    }
    case RECEIVE_SINGUP: {
      return Object.assign({}, state, {
        loading: !state.loading,
        errors: {
          name: action.form[0],
          pass: action.form[1],
        },
      });
    }
    default: {
      return state;
    }
  }
};

export default singUp;
