import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector(state => state.auth.user) || {
    name: "Ravi Mahto",
    location: "Patna, Bihar",
    availability: "Weekends, Evenings",
    avatar: "https://i.pravatar.cc/150?img=25",
    skillOffered: ["React", "Node.js"],
    skillWanted: ["SEO", "Figma"],
    isPublic: true,
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        {/* Top Row: Avatar + Name */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{user.location}</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-600">Availability</h3>
            <p className="text-gray-800">{user.availability}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-600">Skill Offered</h3>
            <div className="text-gray-800">{user.skillOffered.join(", ")}</div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-600">Skill Wanted</h3>
            <div className="text-gray-800">{user.skillWanted.join(", ")}</div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-600">
              Profile Visibility
            </h3>
            <p
              className={`font-semibold ${
                user.isPublic ? "text-green-600" : "text-red-600"
              }`}
            >
              {user.isPublic ? "Public" : "Private"}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-end">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
