
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from '../utils/Cookies';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://sst.psghub.me/sstapi/api' }),
  baseQuery: fetchBaseQuery({
     baseUrl: import.meta.env.VITE_API_KEY_BASE_URL,
     prepareHeaders: (headers) => {
      const token = getCookie('token'); // Replace with your actual cookie name
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
  
      return headers;
    },

  }),
 

  endpoints: () => ({}), // Define endpoints as needed
});
