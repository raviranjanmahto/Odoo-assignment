import { useState } from "react";
import { Link } from "react-router-dom";

// Dummy users with multiple skills
const allUsers = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  skillOffered: [
    ["Photoshop", "Excel"],
    ["React", "Node.js"],
    ["Design", "Figma"],
    ["Public Speaking", "Writing"],
  ][i % 4],
  skillWanted: [
    ["Communication", "SEO"],
    ["Marketing", "Video Editing"],
    ["Cooking", "Time Management"],
    ["Negotiation", "Teamwork"],
  ][i % 4],
  avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
  rating: Math.floor(Math.random() * 3) + 3, // 3 to 5 stars
}));

const USERS_PER_PAGE = 4;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = allUsers.slice(startIndex, startIndex + USERS_PER_PAGE);

  const goToPage = pageNum => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-green-600 text-white py-10 px-6 text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Skill Swap Platform
        </h1>
        <p className="mb-4 text-md md:text-lg">Swap skills. Build community.</p>
        <Link
          to="/login"
          className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200"
        >
          Get Started
        </Link>
      </div>

      {/* User List */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Browse Public Profiles
        </h2>

        <div className="flex flex-col gap-6">
          {currentUsers.map(user => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4"
            >
              {/* Left: Avatar + Skills */}
              <div className="flex items-center gap-4 w-full md:w-2/3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>

                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 mt-2">
                    {/* Skill Offered */}
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md">
                      <strong>Skill Offered:</strong>{" "}
                      {user.skillOffered.join(", ")}
                    </span>

                    {/* Skill Wanted */}
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md mt-2 md:mt-0">
                      <strong>Skill Wanted:</strong>{" "}
                      {user.skillWanted.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Rating */}
              <div className="flex gap-1 justify-center md:justify-end w-full md:w-auto">
                {[1, 2, 3, 4, 5].map(i => (
                  <span
                    key={i}
                    className={
                      i <= user.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 flex-wrap gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
          >
            ←
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded-full ${
                currentPage === i + 1
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
