import { baseApi } from "../../BaseAPi/GenericApi";
import { SHOPS } from "../../Constant/Api_Routes";

export const shopApi = baseApi.injectEndpoints({
    tagTypes: ['Shop'],

    endpoints: (build) => ({
        getAllShops: build.query({
            query: ({ page,search,status,sorted_by}) => {
                // debugger
                return `${SHOPS.LIST_SHOPS}?page=${page}&search=${search}&status=${status}&sorted_by=${sorted_by}
                                            `;
            },
            transformResponse: (response) => {
                return response;
            },
            providesTags: ['Shop'],

        }),


        // add shops

        addShop: build.mutation({
            query: (shop) => {
                console.log("Shop data being sent:", shop);
                return {
                    url: 'v1/shop-add',
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
            //     async onQueryStarted(args,{queryFulfilled,dispatch}){

            //     try {

            //         const {data:createShop}=await queryFulfilled

            //         console.log(createShop,"ceeate")

            //         dispatch(

            //             shopApi.util.updateQueryData('getAllShops',undefined,(draft)=>{

            //                 if (createShop?.data) {
            //                     draft.unshift(createShop.data); // Add the new shop data
            //                 }
            //             })

            //         )

            //     } catch (error) {

            //         console.log(error)

            //     }

            // }
        }),

        // get edit

        getShopById: build.query({
            query: (id) => {
                if (!id) {
                    throw new Error("Shop ID is required");
                }
                return `v1/shop-edit/${id}`;
            },
            transformResponse: (response) => {
                if (response.error) {
                    throw new Error("Error fetching shop data");
                }
                return response; // Return the shop data for editing
            },
           
        }),
        
        
        
    }),
    overrideExisting: false,
});

export const { useGetAllShopsQuery ,useAddShopMutation,useGetShopByIdQuery } = shopApi;
