import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSendSwapRequestMutation } from "../features/swap/swapApi";
import { useState } from "react";
import { toast } from "react-toastify";

const dummyUsers = [
  {
    id: "2",
    name: "Rohit Sharma",
    skillWanted: ["React", "Figma"],
  },
  {
    id: "3",
    name: "Anjali Gupta",
    skillWanted: ["SEO", "Writing"],
  },
];

const SwapRequestForm = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [sendSwapRequest] = useSendSwapRequestMutation();

  const loggedInUser = useSelector(state => state.auth.user);
  const userTo = dummyUsers.find(u => u.id === userId);

  const [yourSkill, setYourSkill] = useState("");
  const [theirSkill, setTheirSkill] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await sendSwapRequest({
        toUserId: userTo.id,
        yourSkill,
        theirSkill,
        message,
      }).unwrap();
      toast.success("Swap request sent!");
      navigate("/dashboard"); // or redirect anywhere
    } catch (err) {
      toast.error(err?.data?.message || "Failed to send swap request");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Send Swap Request</h2>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Choose one of your skills
          </label>
          <select
            className="w-full border rounded-md px-3 py-2"
            value={yourSkill}
            onChange={e => setYourSkill(e.target.value)}
            required
          >
            <option value="">-- Select Skill --</option>
            {loggedInUser?.skillOffered?.map(skill => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Choose one of their wanted skills
          </label>
          <select
            className="w-full border rounded-md px-3 py-2"
            value={theirSkill}
            onChange={e => setTheirSkill(e.target.value)}
            required
          >
            <option value="">-- Select Skill --</option>
            {userTo?.skillWanted?.map(skill => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            className="w-full border rounded-md px-3 py-2"
            rows="3"
            placeholder="Write a message (optional)"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 w-full text-white py-2 rounded-md font-medium"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default SwapRequestForm;
