import { useEffect } from "react";

const Toast = ({ toasts, removeToast }: any) => {
  return (
    <div className="fixed z-50 top-24 left-1/2 transform -translate-x-1/2 w-[90%] w-[700px] lg:w-[800px]">
      {toasts.map((toast: any, index: any) => (
        <ToastMessage
          key={index}
          message={toast}
          index={index}
          removeToast={removeToast}
        />
      ))}
    </div>
  );
};

const ToastMessage = ({ message, index, removeToast }: any) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeToast(index);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index, removeToast]);

  return (
    <div className="bg-black text-white p-4 w-full flex items-center justify-between rounded-md mb-2">
      <p>{message}</p>

      <svg
        className="w-5 h-5 text-white cursor-pointer"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        onClick={() => removeToast(index)}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M6 18 18 6m0 12L6 6"
        />
      </svg>
    </div>
  );
};

export default Toast;
