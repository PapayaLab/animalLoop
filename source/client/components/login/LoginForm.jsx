import React from 'react';

const LoginForm = props => (
  <form onSubmit={(e) => {
    e.preventDefault();
    props.onClick([e.target.elements[0].value, e.target.elements[1].value]);
  }}
  >
    {props.loading && <h1>loading</h1>}

    <h1>Login</h1>

    <input
      type="text"
    />
    <input
      type="password"
    />
    <div className="form-group">
      <button
        className="btn btn-primary btn-lg"
      >Login</button></div>
  </form>
);

export default LoginForm;
