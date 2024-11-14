import { baseApi } from "../../BaseAPi/GenericApi";
import { SURVEY } from "../../Constant/Api_Routes";

const surveySlice = baseApi.injectEndpoints({
    endpoints:(build)=>({
        getALLSuervey:build.query({
            query:({})=>{
                return `${SURVEY.LIST_SURVEY}`
            },
            transformResponse: (response) => {
                return response; 
              },

        })
    })
})
export const {useGetALLSuerveyQuery}=surveySlice