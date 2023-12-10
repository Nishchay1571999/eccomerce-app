import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from './features/auth/userReducer';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

// HOST
export const server = 'http://192.168.166.3:4000/api/v1';
