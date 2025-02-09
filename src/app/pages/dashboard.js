"use client";

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SideBar from '../components/sidebar';
import Welcomer from '../components/welcomer';
import Grid from '../components/grid';

export default function Dashboard() {

    const username = localStorage.getItem('username');

    return (
        <div className='flex flex-row'>
            <SideBar />
            <Welcomer username={username} />
            <Grid />
        </div>
    );
}