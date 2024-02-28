// transactions

import baseApi from "../api/baseApi";

export const transactionsApi = baseApi.injectEndpoints({
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
  transactions: build.query({
    query: () => ({
      url: `/api/v1/transactions`,
      method: "GET",
    }),
    providesTags: ["user"],
  }),
  }),
});

export const { useUserTransactionQuery } = transactionsApi;
// users