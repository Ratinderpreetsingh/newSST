import { createApi } from "@reduxjs/toolkit/query";
import { baseApi } from "../../BaseAPi/GenericApi";

export const shopApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
       getAllShops:build.query({
        query:({})=>{
              return 
        }
       })
    })

})