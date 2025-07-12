import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
          Welcome, {user?.name || "Skill Swapper"}!
        </h1>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Skills Offered" value="4" color="bg-green-100" />
          <Card title="Skills Wanted" value="3" color="bg-yellow-100" />
          <Card title="Swaps Completed" value="2" color="bg-blue-100" />
          <Card title="Feedback Received" value="5" color="bg-purple-100" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className={`rounded-xl shadow-md p-6 ${color}`}>
    <h2 className="text-sm font-medium text-gray-700 mb-1">{title}</h2>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

export default Dashboard;
