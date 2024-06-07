import React, { useState } from 'react';
import axios from 'axios';
import './edit.css';
import { PropagateLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit({ course, editToggle, updateCourse }) {

    const [inputValue, setInputValue] = useState(course.title);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleUpdateCourse = async () => {
        setLoading(true);
        try {
            await axios.put(`/courses/${course.id}`, { title: inputValue });
            updateCourse(course.id, inputValue);
            editToggle();
            toast.success("Course updated successfully!");
        } catch (error) {
            console.error('Error:', error);
            toast.error("Failed to update course.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='edit'>
            <h1>Edit Course Title</h1>
            <input 
                type="text" 
                placeholder='Enter new title' 
                value={inputValue} 
                onChange={handleInputChange} 
            />
            <div className="buttons">
                <button onClick={editToggle}>
                    Cancel
                </button>
                <button onClick={handleUpdateCourse} disabled={loading}>
                    {loading ? <PropagateLoader color='white' size={10} /> : "Edit"}
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
