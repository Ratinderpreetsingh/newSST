
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://sst.psghub.me/sstapi/api' }),
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_KEY_BASE_URL }),

  endpoints: () => ({}), // Define endpoints as needed
});
