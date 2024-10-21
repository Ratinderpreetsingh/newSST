

import { baseApi } from "../../BaseAPi/GenericApi";
import { AUTH } from "../../Constant/Api_Routes";


export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: AUTH.LOGIN,
        method: 'POST',
        body: credentials,
      }),
    }),
    otp: build.mutation({
      query: (credentials) => ({
        url: AUTH.OTP,
        method: 'POST',
        body: credentials,
      }),
     
    }),
    
      
    
    forgot: build.mutation({
      query: (credentials) => ({
        url: AUTH.FORGOT,
        method: 'POST',
        body: credentials,
      }),
    }),
    changepassword: build.mutation({
      query: (credentials) => ({
        url: AUTH.CHANGE_PASSWORD,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false, 
});

export const { useLoginMutation ,useForgotMutation,useChangepasswordMutation,useOtpMutation} = authApi;
