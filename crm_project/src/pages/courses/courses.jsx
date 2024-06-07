import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './courses.css';
import Sidebar from './../dashboard/sidebar';
import Top from '../dashboard/top';
import DeleteCourse from '../../../components/deleteCourse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from '../../../components/edit';
import { PropagateLoader } from 'react-spinners';

export default function Courses() {
    const [deleteCourse, setDeleteCourse] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [response, setResponse] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);
    const [editCourseId, setEditCourseId] = useState(null); // State to track which course is being edited

    const notify = () => toast("Course added successfully!");

    const deleteCourseToggle = () => {
        setDeleteCourse(!deleteCourse);
    };

    const editToggle = (courseId) => {
        setEditCourseId(editCourseId === courseId ? null : courseId); // Toggle edit state for the specific course
    };

    const fetchData = async () => {
        try {
            const response = await axios.post('/allCourses', { title });
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const createNewCourse = async () => {
        setButtonLoading(true)
        try {
            const result = await axios.post('/createCourse', { title });
            const newCourse = result.data; // Assuming the API returns the new course object
            setData([...data, newCourse]); // Add the new course to the existing list
            setTitle(''); // Clear the input field
            notify(); // Show success notification
        } catch (error) {
            console.error('Error creating course:', error);
        }
        setButtonLoading(false)
    };

    const deleteCourseFromApi = async (id) => {
        try {
            await axios.delete(`/courses/${id}`);
            setData(data.filter(course => course.id !== id));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    const updateCourse = (id, newTitle) => {
        const updatedData = data.map(course =>
            course.id === id ? { ...course, title: newTitle } : course
        );
        setData(updatedData);
    };

    return (
        <div className='main'>
            <Sidebar />
            <div className="courses">
                <Top sidebar='sidebar' />
                <h1>Add course: </h1>
                <div className="input_to_add_course">
                    <input
                        type="text"
                        placeholder='Title *'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className='submitButton' onClick={createNewCourse}>
                        {buttonLoading ? <PropagateLoader color='white' /> : "SUBMIT"}
                    </button>
                    <input type="text" placeholder='Search' />
                </div>
                <div className="course_list">
                    {loading ? (
                        <>                      
                            <div className='course courseLoader'></div>
                            <div className='course courseLoader'></div>
                            <div className='course courseLoader'></div>
                            <div className='course courseLoader'></div>
                            <div className='course courseLoader'></div>
                        </>
                    ) : (
                        data.map((course, index) => (
                            <div key={index} className="course">
                                <h2>{course.title}</h2>
                                <div className="actions">
                                    <button onClick={deleteCourseToggle} className='action deleteButton'>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                    <button className='action editButton' onClick={() => editToggle(course.id)}>
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                </div>
                                {deleteCourse && (
                                    <>
                                        <div className="black_screen"></div>
                                        <DeleteCourse deleteCourseToggle={deleteCourseToggle} deleteCourseFromApi={deleteCourseFromApi} course={course} />
                                    </>
                                )}
                                {editCourseId === course.id && (
                                    <>
                                        <div className="black_screen">
                                            <Edit course={course} editToggle={() => editToggle(course.id)} updateCourse={updateCourse} />
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    )}
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}
