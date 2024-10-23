import { baseApi } from "../../BaseAPi/GenericApi";
import { CUSTOMER } from "../../Constant/Api_Routes";

export const customerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCustomers: build.query({
      query: ({page, delivery_date,status,search,sorted_by,cleanup,sms}) => {
        // console.log(`Fetching customers for page: ${page}, delivery date: ${delivery_date},staue :${status}`);
        return `${CUSTOMER.LIST_CUSTOMERS}?page=${page}&delivery_date=${delivery_date}&status=${status}&search=${search}&sorted_by=${sorted_by}&cleanup=${cleanup}&sms=${sms}`;
      },
      transformResponse: (response) => {
        console.log('Response from API:', response);
        return response; 
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCustomersQuery } = customerApi;
