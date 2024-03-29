import { MdDonutLarge } from "react-icons/md";
import { Bounce, Slide, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast({ msg, type }) {
    return toast(msg, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Bounce,
        progress: 1,
        type: type,
        theme: "light",
        
  });
}

export default Toast ;