import { baseApi } from "../../BaseAPi/GenericApi";
import { SHOPS } from "../../Constant/Api_Routes";

export const shopApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllShops: build.query({
            query: ({ page,search}) => {
                return `${SHOPS.LIST_SHOPS}?page=${page}&search=${search}`;
            },
            transformResponse: (response) => {
                console.log('Response from API:', response);
                return response;
            },
        }),
    }),
    overrideExisting: false,
});

export const { useGetAllShopsQuery } = shopApi;
