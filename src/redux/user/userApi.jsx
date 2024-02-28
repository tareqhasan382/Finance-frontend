import baseApi from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // userProfile
    userProfile: build.query({
      query: () => ({
        url: `/api/v1/userProfile`,
        method: "GET",
        providesTags: ["user"],
      }),
      providesTags: ["chat"],
    }),
    userTransaction: build.query({
      query: () => ({
        url: `/api/v1/userTransaction`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    sendMoney: build.mutation({
      query: (data) => ({
          url: "/api/v1/user/sendMoney",
          method: "POST",
          body: data,
      }),
      invalidatesTags: ["user"],
  }),
    cashOut: build.mutation({
      query: (data) => ({
          url: "/api/v1/user/cashOut",
          method: "POST",
          body: data,
      }),
      invalidatesTags: ["user"],
  }),
  users: build.query({
    query: () => ({
      url: `/api/v1/users`,
      method: "GET",
    }),
    providesTags: ["user agent"],
  }),
  agents: build.query({
    query: () => ({
      url: `/api/v1/agents`,
      method: "GET",
    }),
    providesTags: ["user"],
  }),
  cashIn: build.mutation({
    query: (data) => ({
        url: "/api/v1/agent/cashIn",
        method: "POST",
        body: data,
    }),
    invalidatesTags: ["user","agent"],
}),
  }),
});

export const { useUserProfileQuery, useUserTransactionQuery,useSendMoneyMutation,useCashOutMutation,useUsersQuery,useAgentsQuery,useCashInMutation } = userApi;
// /agent/cashIn