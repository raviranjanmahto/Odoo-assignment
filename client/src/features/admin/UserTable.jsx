import React from "react";
import { useGetAllUsersQuery, useToggleBanUserMutation } from "./adminApi";

const UserTable = () => {
  const { data = [], isLoading, refetch } = useGetAllUsersQuery();
  const [toggleBan] = useToggleBanUserMutation();

  const handleToggle = async id => {
    await toggleBan(id);
    refetch();
  };

  return (
    <div className="admin-section">
      <h3>All Users</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Ban/Unban</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isBanned ? "Banned" : "Active"}</td>
                <td>
                  <button onClick={() => handleToggle(user._id)}>
                    {user.isBanned ? "Unban" : "Ban"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
