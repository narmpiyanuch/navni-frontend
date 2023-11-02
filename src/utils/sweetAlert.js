import Swal from "sweetalert2";

const createSweetAlert = (title, text) => {
  return Swal.fire({
    icon: "error",
    title: title,
    text: text,
  });
};

export default createSweetAlert;
