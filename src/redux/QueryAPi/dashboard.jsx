import { baseApi } from "../../BaseAPi/GenericApi";
import { DASHBOARD } from "../../Constant/Api_Routes";

export const dashboardAPi =baseApi.injectEndpoints({
    endpoints:(build)=>({
        getALLdashboardcustomers:build.query({
            query:({page, delivery_date,status,search})=>{
                return `${DASHBOARD.LIST_DAS_CUSTOMERS}?page=${page}&delivery_date=${delivery_date}&status=${status}&search=${search}`
            },
            transformResponse: (response) => {
                console.log('Response from API:', response);
                return response; 
              },
        })

    }),
    overrideExisting: false,

})
export const {useGetALLdashboardcustomersQuery}=dashboardAPi