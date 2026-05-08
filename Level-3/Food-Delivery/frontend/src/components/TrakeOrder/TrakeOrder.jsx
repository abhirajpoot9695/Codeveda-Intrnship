import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:4000"); // Backend URL

const TrackOrder = ({ orderId }) => {
    const [status, setStatus] = useState("Processing");

    useEffect(() => {
        // Server se status sunna
        socket.on("statusUpdate", (data) => {
            if (data.id === orderId) {
                setStatus(data.status);
            }
        });
    }, [orderId]);

    return (
        <div>
            <h2>Order ID: {orderId}</h2>
            <p>Current Status: <b>{status}</b></p>
        </div>
    );
};