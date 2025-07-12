import React from "react";
import { useGetAllSwapsQuery, useDeleteSwapMutation } from "./adminApi";

const SwapTable = () => {
  const { data = [], isLoading, refetch } = useGetAllSwapsQuery();
  const [deleteSwap] = useDeleteSwapMutation();

  const handleDelete = async id => {
    await deleteSwap(id);
    refetch();
  };

  return (
    <div className="admin-section">
      <h3>All Swaps</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
              <th>Skill</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(swap => (
              <tr key={swap._id}>
                <td>{swap.sender.name}</td>
                <td>{swap.recipient.name}</td>
                <td>{swap.status}</td>
                <td>{swap.skill}</td>
                <td>
                  <button onClick={() => handleDelete(swap._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SwapTable;
