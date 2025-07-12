import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  endpoints: builder => ({
    leaveFeedback: builder.mutation({
      query: ({ swapId, rating, comment }) => ({
        url: `feedback/${swapId}`,
        method: "POST",
        body: { rating, comment },
      }),
    }),
    getUserFeedback: builder.query({
      query: userId => `feedback/user/${userId}`,
    }),
  }),
});

export const { useLeaveFeedbackMutation, useGetUserFeedbackQuery } =
  feedbackApi;
