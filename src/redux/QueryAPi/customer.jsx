import { baseApi } from "../../BaseAPi/GenericApi";
import { CUSTOMER } from "../../Constant/Api_Routes";

export const customerApi = baseApi.injectEndpoints({
  tagTypes: ['Customer'],

  endpoints: (build) => ({
    getAllCustomers: build.query({
      query: ({ page, delivery_date, status, search, sorted_by, cleanup, sms }) => {
        return `${CUSTOMER.LIST_CUSTOMERS}?page=${page}&delivery_date=${delivery_date}&status=${status}&search=${search}&sorted_by=${sorted_by}&cleanup=${cleanup}&sms=${sms}`;
      },
      transformResponse: (response) => {
        return response;
      },
      providesTags: ['Customer'],

    }),





    // add Customers

    addCustomer: build.mutation({
      query: (customer) => {

        return {
          url: `${CUSTOMER.ADD_CUSTOMERS}`,
          method: 'POST',
          body: customer,
        };
      },
      invalidatesTags: ['Customer'],
    }),



    // customer get by id
    getCustomerById: build.query({
      query: (id) => {
        if (!id) {
          throw new Error("Customer ID is required");
        }
        return `${CUSTOMER.EDIT_CUSTOMERS}/${id}`;
      },
      transformResponse: (response) => {
        if (response.error) {
          throw new Error("Error fetching Customer data");
        }
        return response; // Return the Customer data for editing
      },

    }),

  }),
  overrideExisting: false,
});

export const { useGetAllCustomersQuery, useAddCustomerMutation, useGetCustomerByIdQuery } = customerApi;
