import { baseApi } from "../../BaseAPi/GenericApi";
import { SHOPS } from "../../Constant/Api_Routes";

export const shopApi = baseApi.injectEndpoints({
    tagTypes: ['Shop'],

    endpoints: (build) => ({
        getAllShops: build.query({
            query: ({ page, search, status, sorted_by }) => {
                // debugger
                return `${SHOPS.LIST_SHOPS}?page=${page}&search=${search}&status=${status}&sorted_by=${sorted_by}
                                            `;
            },
            transformResponse: (response) => {
                return response;
            },
            providesTags: ['Shop'],

        }),
        // dropdownlist
        getAllShopsName: build.query({
            query: (name) => {
                // debugger
                return `${SHOPS.DROP_DOWN_SHOPS}?name=${name}`;
            },
            transformResponse: (response) => {
                return response;
            },

        }),

        // add shops

        addShop: build.mutation({
            query: (shop) => {
                console.log("Shop data being sent:", shop);
                return {
                    url: `${SHOPS.ADD_SHOPS}`,
                    method: 'POST',
                    body: shop,
                };
            },
            invalidatesTags: ['Shop'],

            // transformResponse: (response) => {
            //     console.log("Response from API:", response);
            //     if (response.error) {
            //         throw new Error(response.error);
            //     }
            //     return response; // Modify based on actual response structure
            // },
            async onQueryStarted(args,{queryFulfilled,dispatch}){
                try {
                  const {data:createdShop}=await queryFulfilled
                  console.log(createdShop,"CREATE")
                //   debugger
                  dispatch(
                    
                    shopApi.util.updateQueryData('getAllShops',undefined,(draft)=>{
                    //   debugger
                      console.log(JSON.stringify(draft),"DREAFT")
                      if (Array.isArray(draft)) {
                        draft.push(createdShop.data);
                      } else {
                        console.warn("Draft is not an array:", draft);
                      }
                      
                    })
                  )
                } catch (error) {
                  console.log(error)
                }
              }
        }),

        // get edit

        getShopById: build.query({
            query: (id) => {
                if (!id) {
                    throw new Error("Shop ID is required");
                }
                return `${SHOPS.EDIT_SHOPS}/${id}`;
            },
            transformResponse: (response) => {
                if (response.error) {
                    throw new Error("Error fetching shop data");
                }
                return response; // Return the shop data for editing
            },

        }),

        // update SHOP

        updateShop: build.mutation({
            query: (shopUpdate) => {
                return {
                    url: `${SHOPS.UPDATE_SHOPS}`,
                    method: 'POST',
                    body: shopUpdate,
                }

            },
            invalidatesTags: ['Shop'],

        })



    }),
    overrideExisting: false,
});

export const { useGetAllShopsQuery, useGetAllShopsNameQuery, useAddShopMutation, useGetShopByIdQuery, useUpdateShopMutation } = shopApi;
