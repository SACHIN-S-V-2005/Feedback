import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./styles/App.css";


function App() {
return (
<div className="app-container">
<header className="header">
<img src="https://i.pinimg.com/736x/2e/35/15/2e35154eef92580864c07c8304fd570d.jpg" alt="Feedback" className="banner" />
<h1>Student Feedback System</h1>
<p>Your feedback helps us improve</p>
</header>

<div className="container">

<div className="content">
<FeedbackForm />
<FeedbackList />
</div>


<footer className="footer">© 2025 Student Feedback App</footer>
</div>
</div>
);
}


export default App;