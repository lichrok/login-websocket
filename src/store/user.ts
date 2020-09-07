import { createSlice } from '@reduxjs/toolkit';

const initialState = { token: localStorage.getItem('token') || '' };
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (store, { payload: { token } }) => {
      return { token }
    },
    logout: () => {
      return { token: '' }
    }
  },
});

// export const {login, logout} = slice.actions;
// export const middleware = (store) => (next) => (action) => {
//   if (action.type === login.type) localStorage.setItem('token', action.payload.token);
//   if (action.type === logout.type) localStorage.removeItem('token');

//   next(action);
// }
// export default slice;
