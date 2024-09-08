import { api } from "./api";

const authApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
 
    // getIndividualTeam: builder.query({
    //   query: (id) => `/user/v1/individual-team-data?id=${id}`,
    //   providesTags: ['getTeams'],
    // }),

  }),
});

export const {
  // useGetIndividualTeamQuery,
} = authApi;