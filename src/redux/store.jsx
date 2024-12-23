import {configureStore} from '@reduxjs/toolkit';
import { studentDetails } from './StudentsSlice';

export const store = configureStore({
      reducer: {
            app: studentDetails,
      },
});
