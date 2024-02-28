import { baseApi } from "../api/baseApi";
import { userLoggedIn } from "./authSlice";
import { jwtDecode } from "jwt-decode";
export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: "/api/v1/user/signup",
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
        login: builder.mutation({
            query: (data) => ({
                url: "/api/v1/user/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                   // console.log("queryFulfilled result:",result.data.token)
                   const user = jwtDecode(result?.data?.token)
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
    }),
});

export const { useLoginMutation, useSignupMutation } = authApi;

/*
 async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                   // console.log("result:",result.data.data.accessToken)
                   const user = jwtDecode(result.data.data.accessToken)
                   //console.log("user token:",user)
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.data.accessToken,
                            user: user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.data.accessToken,
                            user: user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
*/