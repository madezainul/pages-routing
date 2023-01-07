import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';
import {
    HomePage,
    Lecturer, ListLecturers, CreateLecturer,
    Student
} from '../pages'

const MainContent = () => {
  return (
    <div className="container p-3">
        {/* <h3>Dashboard Class Room</h3> */}

        <Routes>
            <Route path="/" element={
                <HomePage></HomePage>
            }></Route>
            <Route path="lecturers" element={<Lecturer></Lecturer>}>
                <Route path="" element={<ListLecturers></ListLecturers>}></Route>
                <Route path="create" element={<CreateLecturer></CreateLecturer>}></Route>
            </Route>
            <Route path="/students" element={
                <Student></Student>
            }></Route>
        </Routes>
    </div>
  )
}

export default MainContent