import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  endpoints: builder => ({
    getProfile: builder.query({
      query: () => "users/profile",
    }),
    updateProfile: builder.mutation({
      query: formData => ({
        url: "users/profile",
        method: "PUT",
        body: formData,
      }),
    }),
    getPublicUsers: builder.query({
      query: (searchTerm = "") =>
        `users/public?search=${encodeURIComponent(searchTerm)}`,
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetPublicUsersQuery,
} = userApi;
