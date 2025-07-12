import React from "react";
import { useGetMySwapsQuery } from "./swapApi";
import SwapActionButtons from "./SwapActionButtons";

const SwapRequestList = () => {
  const { data = [], isLoading, refetch } = useGetMySwapsQuery();

  if (isLoading) return <p>Loading swaps...</p>;

  return (
    <div className="swap-list">
      {data.map(swap => (
        <div key={swap._id} className="swap-card">
          <h4>
            {swap.isIncoming ? "From: " : "To: "}
            {swap.otherUser.name}
          </h4>
          <p>Status: {swap.status}</p>
          <p>Skill: {swap.skill}</p>

          <SwapActionButtons swap={swap} refetch={refetch} />
        </div>
      ))}
    </div>
  );
};

export default SwapRequestList;
