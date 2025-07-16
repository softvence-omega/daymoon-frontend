import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define your toast styles
const toastStyles = {
  success: "bg-[#10b98133] text-[#10B981] border border-[#10b981] shadow-lg",
  error: "bg-[#F04436] text-white border border-[#F04436] shadow-lg",
  pending: "bg-[#f59e4233] text-[#F59E42] border border-[#f59e42] shadow-lg",
  shipped: "bg-[#1565d833] text-[#1565D8] border border-[#1565d8] shadow-lg",
};

// Define the ToastType for better type safety
type ToastType = "success" | "error" | "pending" | "shipped";

// `notify` function
export const notify = (message: string, type: ToastType) => {
  toast(message, {
    type: "info",
    className: toastStyles[type],
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
    transition: Bounce,
  });
};
