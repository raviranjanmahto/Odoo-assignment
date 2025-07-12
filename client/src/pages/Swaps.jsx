const Swaps = () => {
  const dummySwaps = [
    {
      id: 1,
      from: "Sana Kapoor",
      to: "Ravi Kumar",
      skill: "Cooking for Photography",
      status: "pending",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: 2,
      from: "Ankit Sharma",
      to: "Ravi Kumar",
      skill: "Photoshop for Excel",
      status: "accepted",
      avatar: "https://i.pravatar.cc/100?img=6",
    },
  ];

  const handleAccept = id => alert(`Accepted swap ${id}`);
  const handleReject = id => alert(`Rejected swap ${id}`);
  const handleDelete = id => alert(`Deleted swap ${id}`);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Swap Requests
        </h2>

        <div className="space-y-4">
          {dummySwaps.map(req => (
            <div
              key={req.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border rounded-lg shadow-sm bg-gray-100"
            >
              <div className="flex items-center gap-4">
                <img
                  src={req.avatar}
                  alt={req.from}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">{req.from}</p>
                  <p className="text-sm text-gray-600">{req.skill}</p>
                  <p
                    className={`text-xs font-medium ${
                      req.status === "pending"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {req.status.toUpperCase()}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                {req.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleAccept(req.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(req.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Reject
                    </button>
                  </>
                )}
                {req.status === "accepted" && (
                  <button
                    onClick={() => handleDelete(req.id)}
                    className="bg-gray-500 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Swaps;
