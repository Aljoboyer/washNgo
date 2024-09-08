import { api } from "./api";

const authApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
 
    signUp: builder.mutation({
      query: (data ) => ({
        url: '/register',
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en",
        },
        body: data,
      }),
    //   invalidatesTags: [''],
    }),

    login: builder.mutation({
      query: (data ) => ({
        url: '/login',
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en",
        },
        body: data,
      }),
    //   invalidatesTags: [''],
    }),


  }),
});

export const {
  useSignUpMutation,
  useLoginMutation
} = authApi;