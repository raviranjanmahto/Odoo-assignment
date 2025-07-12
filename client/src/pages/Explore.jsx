const Explore = () => {
  const dummyUsers = [
    {
      id: 1,
      name: "Ankit Sharma",
      skillsOffered: "Photoshop",
      skillsWanted: "Excel",
      availability: "Evenings",
      photo: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Sana Kapoor",
      skillsOffered: "Cooking",
      skillsWanted: "Photography",
      availability: "Weekends",
      photo: "https://i.pravatar.cc/100?img=2",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by skill..."
          className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Skill Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {dummyUsers.map(user => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-xl p-4 flex gap-4 items-center"
            >
              <img
                src={user.photo}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-600">
                  <strong>Offers:</strong> {user.skillsOffered}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Wants:</strong> {user.skillsWanted}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Availability:</strong> {user.availability}
                </p>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md">
                Swap
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
