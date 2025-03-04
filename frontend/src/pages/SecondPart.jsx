import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000"); // Adjust backend URL if needed

const SecondPage = () => {
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        socket.on("contentVisible", () => {
            console.log("content is visible")
            setContentVisible(true);
        });

        return () => {
            socket.off("contentVisible");
        };
    }, []);

    return (
        <div>
            <h1>Second Page</h1>
            {contentVisible ? (
                <h2>Content is now visible!</h2>
            ) : (
                <h2>Waiting for admin to start...</h2>
            )}
        </div>
    );
};

export default SecondPage;
