import React, { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi';
import { getLecturers } from '../../axios/lecturerAxios';
import LoadingBar from '../../helpers/LoadingBar';

const Lecturer = () => {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    //callback untuk mengambil data lecturers dari axios
    getLecturers(result => setLecturers(result))
  }, [])
  

  return (
    <div className="my-3">
        <div className="w-100 my-3 text-center">
          <div className="flex">
            <h3>Lecturers</h3>
            <button className="btn btn-sm btn-primary">
              <span className="me-2">
                <FiPlus></FiPlus>
              </span>
              Add Lecturer
            </button>
          </div>
        </div>
        <div className="w-100 my-3 text-center">
          <div className="col-9 mx-auto">
            <div className="w-100">
              <table className="table table-border">
                <thead>
                  <tr className="table-primary">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Age</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    lecturers.length > 0 ?
                    lecturers.map(lecturer => {
                      const { id, name, subject, age } = lecturer
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{subject}</td>
                          <td>{age} years old</td>
                          <td></td>
                        </tr> 
                      )
                    }) : <LoadingBar></LoadingBar>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Lecturer