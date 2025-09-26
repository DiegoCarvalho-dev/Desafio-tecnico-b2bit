import React, { useEffect, useState } from "react";

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function onToast(e) {
      const t = e.detail;
      setToasts((cur) => [...cur, t]);

      const duration = t.duration || 4000;
      setTimeout(() => {
        setToasts((cur) => cur.filter((x) => x.id !== t.id));
      }, duration);
    }

    window.addEventListener("app:toast", onToast);
    return () => window.removeEventListener("app:toast", onToast);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`max-w-sm px-4 py-2 rounded shadow-lg text-sm font-medium transition-all ${
            t.type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"
          }`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
