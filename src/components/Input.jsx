// Input.js
const Input = ({ label, type, placeholder, name }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-white/60 text-sm">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-[#1c1c1e] text-white border border-[#333]
         rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-sm placeholder:text-white/40"
      />
    </div>
  );
};

export default Input;
