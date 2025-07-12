const FormInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>
  );
};

export default FormInput;
