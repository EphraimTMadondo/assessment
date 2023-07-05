import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .required('Required'),
        password: Yup.string()
            .min(
                8,
                'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
            )
          .minUppercase(1, 'password must contain at least 1 upper case letter')
          .minNumbers(1, 'password must contain at least 1 number')
          .minSymbols(1, 'password must contain at least 1 special character')
        });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: {LoginSchema},
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
        <button type="submit" disabled={!(formik.isValid && formik.dirty)} className="button is-primary">Submit</button>
        </form>
      </div>
  );
};

export default LoginPage;