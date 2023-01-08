import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/lecturers'

const getLecturers = async (cb) => {
    try {
        let lecturers = await axios({
            method: "GET",
            url: URL
        })
        cb(lecturers.data);
        // console.log(lecturers);
    } catch (error) {
        console.log(error);
    }
}

const addLecturer = async (lecturer) => {
    try {
        let result = await axios({
            method: "POST",
            url: URL + "/create",
            data: lecturer
        })
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

const editLecturer = async () => {}

const removeLecturer = async (id) => {
    let result = await axios({
        method: "DELETE",
        url: URL + "/delete/" + id
    })
    console.log(result)
}

const accountLecturer = async () => {}

export {
    getLecturers,
    addLecturer,
    editLecturer,
    removeLecturer,
    accountLecturer
}