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
      // async onQueryStarted(args,{queryFulfilled,dispatch}){
      //     try {
      //       const {data:createdCustomer}=await queryFulfilled
      //       console.log(createdCustomer,"CREATE")
      //       debugger
      //       dispatch(
              
      //         customerApi.util.updateQueryData('getAllCustomers',undefined,(draft)=>{
      //           debugger
      //           console.log(JSON.stringify(draft),"DREAFT")
      //           if (Array.isArray(draft)) {
      //             draft.push(createdCustomer.data);
      //           } else {
      //             console.warn("Draft is not an array:", draft);
      //           }
                
      //         })
      //       )
      //     } catch (error) {
      //       console.log(error)
      //     }
      //   }
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
      // updatee Customers

      updateCustomer: build.mutation({
        query: (customer) => {

          return {
            url: `${CUSTOMER.UPDATE_CUSTOMERS}`,
            method: 'POST',
            body: customer,
          };
        },
        invalidatesTags: ['Customer'],
      }),


      // customer delete

      deleteCustomer: build.mutation({
        query: (id) => {
          
        return {
          url: `v1/customer-delete/${id}`,
          method: 'DELETE',
          }  },
        
        // Specify what data to invalidate after this mutation
        invalidatesTags: ['Customer'],
      // async onQueryStarted(args,{queryFulfilled,dispatch}){
      //   try {
      //     await queryFulfilled
      //     console.log(args)
      //     dispatch(
      //       customerApi.util.updateQueryData('getAllCustomers',undefined,(draft)=>{
      //         console.log(JSON.stringify(draft))
      //       })
      //     )
      //   } catch (error) {
          
      //   }
      // }
      }),


    }),
    overrideExisting: false,
  });

  export const { useGetAllCustomersQuery, useAddCustomerMutation, useUpdateCustomerMutation, useGetCustomerByIdQuery, useDeleteCustomerMutation } = customerApi;
