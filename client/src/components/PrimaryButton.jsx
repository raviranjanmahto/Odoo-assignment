const PrimaryButton = ({ children, type = "submit", disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
