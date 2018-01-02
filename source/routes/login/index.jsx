import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { singUp } from '../../client/actions/singUpActions';

import LoginForm from '../../client/components/login/LoginForm';

const mapStateToProps = state => ({
  loading: state.reducer.singUp.loading,
  errors: state.reducer.singUp.errors,
});

const mapDispatchToProps = dispatch => ({
  onClick: (form) => {
    dispatch(singUp(form));
  },
});

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    pass: PropTypes.string,
  }).isRequired,
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default Login;
