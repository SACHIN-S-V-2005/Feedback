import React, {useState} from "react";
import { addFeedback } from "../services/FeedbackService";

function FeedbackForm() {
    const [feedback, setFeedback]= useState({
        studentName: "",
        courseName: "",
        rating: "",
        comment: ""
    });

    const handleChange =(e)=>{
        setFeedback({ ...feedback, [e.target.name]: e.target.value});
    };

    const handleSubmit= (e)=>{
        e.preventDefault();
        alert("Feedback Submitted")
        addFeedback(feedback).then(()=>{
            alert("Feedback submitted successfully");
            setFeedback({ studentName: "",courseName: "",rating: "",comment: ""});
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Student Feedback</h2><input name="studentName" placeholder="Student Name" value={feedback.studentName} onChange={handleChange} required />
            <input name="courseName" placeholder="Course Name" value={feedback.courseName} onChange={handleChange} required />
            <input name="rating" type="number" placeholder="Rating (1-5)" value={feedback.rating} onChange={handleChange} required />
            <textarea name="comment" placeholder="Comment" value={feedback.comment} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default FeedbackForm;