import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitted with ${rating} stars and comment: ${comment}`);
    setRating(0);
    setComment("");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://i.pravatar.cc/100?img=7"
            alt="Swap User"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold">Rate your swap with Anjali</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className="text-2xl text-yellow-400 focus:outline-none"
              >
                {star <= (hover || rating) ? "★" : "☆"}
              </button>
            ))}
          </div>

          {/* Feedback textarea */}
          <div>
            <label className="block text-sm font-medium mb-1">Feedback</label>
            <textarea
              className="w-full p-2 border rounded-md resize-none"
              rows="4"
              placeholder="Write your feedback..."
              value={comment}
              onChange={e => setComment(e.target.value)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 font-semibold rounded-md"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
