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

const addLecturer = async () => {}

const editLecturer = async () => {}

const removeLecturer = async () => {}

const accountLecturer = async () => {}

export {
    getLecturers,
    addLecturer,
    editLecturer,
    removeLecturer,
    accountLecturer
}