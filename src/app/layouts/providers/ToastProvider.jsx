import { createContext, useContext, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function showToast({ message, type = "info", duration = 3000 , show = false }) {
    const id = Date.now();
  
    setToasts(prev => [...prev, { id, message, type , show}]);

    requestAnimationFrame(() => {
    setToasts(prev =>
      prev.map(t => t.id === id ? { ...t, show: true } : t)
    );
  });





    setTimeout(() => {
      setToasts(prev => prev.map(t => t.id == id? {...t,show : false} : t));
    }, duration);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed top-35 right-2   z-200 flex flex-col gap-1.5 ">
  {toasts.slice(0,5).map(t => (
    <div
      className={`bg-(--bg-card) shadow-lg px-4 flex justify-center items-center py-2.5 rounded-lg gap-2  transform transition-transform duration-400 ease-in-out
      ${t.show ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-70 scale-97"}
        `}
      key={t.id}>
      <div className="flex justify-center items-center">
        {t.type === "info" && <IoMdInformationCircleOutline className="size-4 md:size-6 text-blue-600"/>}
        {t.type === "error" && <IoMdCloseCircleOutline className="size-4 md:size-6 text-red-600"/>}
        {t.type === "success" && <FaRegCircleCheck className="size-4 md:size-6 text-green-600"/>}
      </div>
      <span className="text-[10px] md:text-[12px]">{t.message}</span>
    </div>
  ))}
</div>
    </ToastContext.Provider>
  );
}