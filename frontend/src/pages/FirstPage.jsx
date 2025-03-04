import React from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic (if needed)
        navigate("/second-page"); // Redirect to Second Page
    };

    return (
        <div>
            <h1>First Page</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="bg-red-500">Submit</button>
            </form>
        </div>
    );
};

export default FirstPage;
