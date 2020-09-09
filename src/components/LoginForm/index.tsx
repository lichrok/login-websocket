import React, { FC } from "react";
import { Formik } from "formik";
import * as yup from 'yup';
import { TextField, Button, CircularProgress, Box } from '@material-ui/core';
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
                <TextField
                  label="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  error={!!errors.username}
                  helperText={errors.username}
                />
              </div>
              <div>
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </div>
              <Box mt={2} textAlign="right">
                <Button
                  type="submit"
                  disabled={loading || !isValid}
                >
                  {loading && (<CircularProgress />)}
                  sign in
                </Button>
              </Box>
              {error && (
                <Box color="action">{error}</Box>
              )}
            </form>
          )}
      </Formik>
    </div>
  );
