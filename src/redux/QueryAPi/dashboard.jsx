import { baseApi } from "../../BaseAPi/GenericApi";
import { DASHBOARD } from "../../Constant/Api_Routes";

export const dashboardAPi =baseApi.injectEndpoints({
    endpoints:(build)=>({
        getAllDashbaord:build.query({
            query:({page,shopsearch,shopstatus})=>{
                // debugger
                return `${DASHBOARD.DASHBOARD}?perPage=${page}&shopsearch=${shopsearch}&shopstatus=${shopstatus}`
            },
            transformResponse: (response) => {
                console.log('Response from API:', response);
                return response; 
              },
        })

    }),
    overrideExisting: false,

})
export const {useGetAllDashbaordQuery}=dashboardAPi