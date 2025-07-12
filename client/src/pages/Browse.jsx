import { useState } from "react";
import { useGetPublicUsersQuery } from "../features/user/userApi";
import UserCard from "../features/user/UserCard";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data = [], isLoading } = useGetPublicUsersQuery(searchTerm);

  return (
    <div className="browse-page">
      <h2>Browse Users by Skill</h2>
      <input
        type="text"
        placeholder="Search skills (e.g., Photoshop)"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="user-grid">
          {data.length === 0 ? (
            <p>No users found.</p>
          ) : (
            data.map(user => <UserCard key={user._id} user={user} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Browse;
