import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSendSwapRequestMutation } from "../features/swap/swapApi";
import { toast } from "react-toastify";

// Dummy user list (replace with API call later)
const allUsers = [
  {
    id: "2",
    name: "Rohit Sharma",
    location: "Delhi",
    availability: "Evenings",
    avatar: "https://i.pravatar.cc/150?img=12",
    skillOffered: ["Photoshop", "Excel"],
    skillWanted: ["React", "SEO"],
    isPublic: true,
  },
  {
    id: "3",
    name: "Anjali Gupta",
    location: "Mumbai",
    availability: "Weekends",
    avatar: "https://i.pravatar.cc/150?img=30",
    skillOffered: ["Node.js", "Design"],
    skillWanted: ["Writing", "Figma"],
    isPublic: true,
  },
];

const UserProfile = () => {
  const { id } = useParams();
  const user = allUsers.find(u => u.id === id);
  const loggedInUser = useSelector(state => state.auth.user);
  const [sendSwapRequest] = useSendSwapRequestMutation();
  const navigate = useNavigate();

  if (!user) return <div>User not found</div>;

  const handleSwapRequest = async () => {
    try {
      await sendSwapRequest({ toUserId: user.id }).unwrap();
      toast.success("Swap request sent!");
      navigate(`/swap-request/${user.id}`);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to send request");
    }
  };

  const isOwnProfile = loggedInUser?.id === user.id;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.location}</p>
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
            <p className="text-gray-800">{user.skillOffered.join(", ")}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Skill Wanted</h3>
            <p className="text-gray-800">{user.skillWanted.join(", ")}</p>
          </div>
        </div>

        {/* Swap Button */}
        {!isOwnProfile && (
          <div className="text-right">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium"
              onClick={handleSwapRequest}
            >
              Request Swap
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
