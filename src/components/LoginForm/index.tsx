import React, { FC } from "react";
import { Formik } from "formik";
import * as yup from 'yup';
import { LoginType } from '../../core/types/IUser';

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});

export const LoginForm: FC<LoginType> = ({
  login,
  loading,
  error
}) => (
    <div>
      <Formik
        onSubmit={(values) => {
          login(values)
        }}
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={schema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          isValid,
          dirty
        }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                <p>{errors.username}</p>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <p>{errors.password}</p>
              </div>
              <div>
                <button type="submit" disabled={loading || !isValid || !dirty}>
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
