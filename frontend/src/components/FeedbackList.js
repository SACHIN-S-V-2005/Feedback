import React, {useEffect, useState} from "react";
import { getFeedback } from "../services/FeedbackService";

function FeedbackList(){
    const [feedbacks, setFeedbacks]= useState([]);

    useEffect(()=>{
        getFeedback().then((res)=> setFeedbacks(res.data));
    }, []);

    return (
        <div className="card">
<h2>All Feedback</h2>
{feedbacks.length === 0 && <p>No feedback available</p>}
<ul className="feedback-list">
{feedbacks.map((f) => (
<li key={f.id}>
<strong>{f.studentName}</strong> ({f.courseName})<br />
⭐ {f.rating}/5<br />
<span>{f.comment}</span>
</li>
))}
</ul>
</div>
    );
}

export default FeedbackList;