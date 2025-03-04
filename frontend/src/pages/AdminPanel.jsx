import { io } from "socket.io-client";
import { useEffect, useState } from 'react'

const socket = io("http://localhost:8000"); // Adjust to backend URL

const AdminPanel = () => {

    const [teamCount, setTeamCount] = useState(0);

    const handleStart = () => {
        socket.emit("startLevel1");
    };

    useEffect(() => {
        // Fetch initial count
        if(teamCount == 0){
            axios.get("http://localhost:8000/team/count").then((res) => {
                setTeamCount(res.data.count);
            });
        }
        else{
            socket.on("teamCountUpdated", (count) => {
                setTeamCount(count);
            });
        }

        return () => socket.off("teamCountUpdated");
    }, []);

    // console.log(teamCount);

    return (
        <button onClick={handleStart} style={{backgroundColor:"blue"}}>Start</button>
        // <p>sjkdhfjsdhfjsdgh</p>
    );
};

export default AdminPanel;
