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


export const isSave = (input)=>{
  
  return Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
 
  confirmButtonText: 'Yes',
  denyButtonText: 'No',
  customClass: {
    actions: 'my-actions',
    cancelButton: 'order-1 right-gap',
    confirmButton: 'order-2',
    denyButton: 'order-3',
  },
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Cancel Delete', '', 'info')
  }
})}