import React from "react";
import { useGetUserFeedbackQuery } from "./feedbackApi";

const FeedbackList = ({ userId }) => {
  const { data = [], isLoading } = useGetUserFeedbackQuery(userId);

  if (isLoading) return <p>Loading feedback...</p>;
  if (!data.length) return <p>No feedback yet.</p>;

  return (
    <div className="feedback-list">
      <h4>Feedback</h4>
      {data.map(fb => (
        <div key={fb._id} className="feedback-card">
          <strong>{fb.rating} ★</strong>
          <p>{fb.comment}</p>
          <small>By {fb.givenBy.name}</small>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
