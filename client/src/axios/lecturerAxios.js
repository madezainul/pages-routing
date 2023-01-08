import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/lecturers";

const getLecturers = async (cb) => {
  try {
    let lecturers = await axios({
      method: "GET",
      url: URL,
    });
    cb(lecturers.data);
    // console.log(lecturers);
  } catch (error) {
    console.log(error);
  }
};

const addLecturer = async (lecturer) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/create",
      data: lecturer,
    });
    Swal.fire("Add Lecturer", "Lecturer has been added", "success");
  } catch (error) {
    console.log(error);
  }
};

const editLecturer = async (id, lecturer) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/update/" + id,
      data: lecturer,
    });
    Swal.fire(
      "Edit Lecturer" + id,
      "Lecturer" + id + "has been edited",
      "success"
    );
  } catch (error) {
    console.log(error);
  }
};

const removeLecturer = async (id) => {
  try {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          let result = await axios({
            method: "DELETE",
            url: URL + "/delete/" + id,
          });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  } catch (error) {
    console.log(error);
  }
};

const accountLecturer = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/information/" + id,
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

export {
  getLecturers,
  addLecturer,
  editLecturer,
  removeLecturer,
  accountLecturer,
};
