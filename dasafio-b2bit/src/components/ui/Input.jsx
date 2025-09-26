export default function Input({ label, type = "text", ...props }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        className="px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        {...props}
      />
    </div>
  );
}
