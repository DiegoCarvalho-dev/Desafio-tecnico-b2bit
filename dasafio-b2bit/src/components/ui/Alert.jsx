export default function Alert({ type = "info", message }) {
  const styles = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
  };

  return (
    <div className={`p-3 border-l-4 rounded-md my-2 ${styles[type]}`}>
      {message}
    </div>
  );
}
