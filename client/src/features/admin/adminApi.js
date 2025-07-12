import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7027/api/",
    credentials: "include",
  }),
  endpoints: builder => ({
    getAllUsers: builder.query({
      query: () => "admin/users",
    }),
    toggleBanUser: builder.mutation({
      query: userId => ({
        url: `admin/users/${userId}/toggle-ban`,
        method: "PUT",
      }),
    }),
    getAllSwaps: builder.query({
      query: () => "admin/swaps",
    }),
    deleteSwap: builder.mutation({
      query: swapId => ({
        url: `admin/swaps/${swapId}`,
        method: "DELETE",
      }),
    }),
    sendBroadcast: builder.mutation({
      query: message => ({
        url: "admin/broadcast",
        method: "POST",
        body: { message },
      }),
    }),
    downloadReport: builder.query({
      query: () => "admin/reports",
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useToggleBanUserMutation,
  useGetAllSwapsQuery,
  useDeleteSwapMutation,
  useSendBroadcastMutation,
  useDownloadReportQuery,
} = adminApi;
