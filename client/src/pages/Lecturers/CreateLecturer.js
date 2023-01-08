import React, { useState } from 'react'
import { addLecturer } from '../../axios/lecturerAxios';
import { useNavigate } from 'react-router-dom';

const CreateLecturer = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    age: "",
    city: "",
    image: "http://via.placeholder.com/100"
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    addLecturer(form);
    navigation("/lecturers");
    // console.log(form)
  }

  return (
    <>
      <div className="row my-3">
        <div className="w-100">
          <h5>Create Lecturer</h5>
        </div>
        <div className="w-100">
          <div className="mb-3">
            <label>Name: </label>
            <input
            onChange={(e) => setForm({...form,name: e.target.value})}
            type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Subject: </label>
            <input
            onChange={(e) => setForm({...form,subject: e.target.value})}
            type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Age: </label>
            <input
            onChange={(e) => setForm({...form,age: e.target.value})}
            type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>City: </label>
            <input
            onChange={(e) => setForm({...form,city: e.target.value})}
            type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <button onClick={() => submitHandler()} className="btn btn-block btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateLecturer