import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const swapApi = createApi({
  reducerPath: "swapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  endpoints: builder => ({
    sendSwapRequest: builder.mutation({
      query: recipientId => ({
        url: "swaps",
        method: "POST",
        body: { recipientId },
      }),
    }),
    getMySwaps: builder.query({
      query: () => "swaps",
    }),
    acceptSwap: builder.mutation({
      query: id => ({
        url: `swaps/${id}/accept`,
        method: "PUT",
      }),
    }),
    rejectSwap: builder.mutation({
      query: id => ({
        url: `swaps/${id}/reject`,
        method: "PUT",
      }),
    }),
    cancelSwap: builder.mutation({
      query: id => ({
        url: `swaps/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSendSwapRequestMutation,
  useGetMySwapsQuery,
  useAcceptSwapMutation,
  useRejectSwapMutation,
  useCancelSwapMutation,
} = swapApi;
