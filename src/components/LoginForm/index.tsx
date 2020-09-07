import React, { FC } from "react";
import { Formik } from "formik";
import * as yup from 'yup';
import { LoginType } from '../../core/types/IUser';

const schema = yup.object({
  username: yup.string().required(),
  paasword: yup.string().required()
});

export const LoginForm: FC<LoginType> = ({
  login,
  loading,
  error
}) => (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => { login(values) }}
        initialValues={{
          username: '',
          password: ''
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          isValid,
        }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" disabled={loading || !isValid}>
                  {loading && (<span>loading...</span>)}
                  sign in
                </button>
              </div>
              {error && (
                <div>{error}</div>
              )}
            </form>
          )}
      </Formik>
    </div>
  );
