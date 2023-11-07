import Swal from "sweetalert2";

export const createErrorSweetAlert = (title, text) => {
  return Swal.fire({
    icon: "error",
    title: title,
    text: text,
  });
};

export const createAlert = (title, text) => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: text,
  });
};
