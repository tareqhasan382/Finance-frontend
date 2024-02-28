///agent/signup

import { baseApi } from "../api/baseApi";
// import { userLoggedIn } from "./authSlice";
import { jwtDecode } from "jwt-decode";
import { userLoggedIn } from "../auth/authSlice";
export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    agentSignup: builder.mutation({
      query: (data) => ({
        url: "/api/v1/agent/signup",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    adminSignup: builder.mutation({
      query: (data) => ({
        url: "/api/v1/admin/signup",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    agentLogin: builder.mutation({
      query: (data) => ({
        url: "/api/v1/agent/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log("queryFulfilled result:",result.data.token)
          const user = jwtDecode(result?.data?.token);
          //console.log("user token:",user)
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.token,
              user: user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.token,
              user: user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    adminLogin: builder.mutation({
      query: (data) => ({
        url: "/api/v1/admin/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log("queryFulfilled result:",result.data.token)
          const user = jwtDecode(result?.data?.token);
          //console.log("user token:",user)
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.token,
              user: user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.token,
              user: user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    agentProfile: builder.query({
      query: () => ({
        url: `/api/v1/agentProfile`,
        method: "GET",
        providesTags: ["user agent"],
      }),
      providesTags: ["agent user"],
    }),
    agentCashIn: builder.mutation({
      query: (data) => ({
        url: "/api/v1/agent/cashIn",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user agent"],
    }),
    agentTransaction: builder.query({
      query: () => ({
        url: `/api/v1/agentTransaction`,
        method: "GET",
      }),
      providesTags: ["user agent"],
    }),
    allAgents: builder.query({
      query: () => ({
        url: `/api/v1/admin/allAgent`,
        method: "GET",
      }),
      providesTags: ["user agent"],
    }),
    approveAgent: builder.mutation({
      query: (data) => ({
        url: "/api/v1/admin/approveAgent",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user agent"],
    }),
  }),
});

export const {
  useAgentSignupMutation,
  useAgentLoginMutation,
  useAgentProfileQuery,
  useAgentCashInMutation,
  useAgentTransactionQuery,
  useAllAgentsQuery,
  useApproveAgentMutation,
  useAdminLoginMutation,
  useAdminSignupMutation,
} = agentApi;
// agentTransaction
// router.patch("/admin/approveAgent", AdminController.approveAgent);
// router.get("/admin/allAgent", AdminController.allAgent);
