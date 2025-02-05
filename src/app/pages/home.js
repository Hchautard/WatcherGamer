"use client";

import Switch from "../components/switch";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <a onClick={() => navigate('/login')}>Login</a>
            <a onClick={() => navigate('/register')}>Register</a>
            <Switch />
        </div>
    );
}
