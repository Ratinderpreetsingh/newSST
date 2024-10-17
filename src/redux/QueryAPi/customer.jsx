import { baseApi } from "../../BaseAPi/GenericApi";
import { CUSTOMER } from "../../Constant/Api_Routes";

export const customerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCustomers: build.query({
      query: ({page, delivery_date,status,search}) => {
        // console.log(`Fetching customers for page: ${page}, delivery date: ${delivery_date},staue :${status}`);
        return `${CUSTOMER.LIST_CUSTOMERS}?page=${page}&delivery_date=${delivery_date}&status=${status}&search=${search}`;
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
