import React from 'react';
import { useFormik } from 'formik';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
        console.log(values);
    },
  });
  return (
      <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input
                        id="username"
                        name="username"
                        class="input"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input
                        id="password"
                        name="password"
                        className="input"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
            </div>
        <button type="submit" className="button is-primary">Submit</button>
        </form>
      </div>
  );
};

export default LoginPage;