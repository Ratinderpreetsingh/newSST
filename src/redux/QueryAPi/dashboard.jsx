import { baseApi } from "../../BaseAPi/GenericApi";
import { DASHBOARD } from "../../Constant/Api_Routes";

export const dashboardAPi =baseApi.injectEndpoints({
    endpoints:(build)=>({
        getAllDashbaord:build.query({
            query:({page,shopsearch,shopstatus,delivery_date,status,search,sorted_by,cleanup,sms})=>{
                // debugger
                return `${DASHBOARD.DASHBOARD}?perPage=${page}&shopsearch=${shopsearch}&shopstatus=${shopstatus}&delivery_date=${delivery_date}&status=${status}&search=${search}&sorted_by=${sorted_by}&cleanup=${cleanup}&sms=${sms}` },
            transformResponse: (response) => {
                return response; 
              },
        })

    }),
    overrideExisting: false,

})
export const {useGetAllDashbaordQuery}=dashboardAPi