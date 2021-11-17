import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory' ;
import { Outlet } from 'react-router';

const HomePage = () => (
    <div className='homepage'>
        <Directory/>
        <Outlet/>
    </div>
)
export default HomePage;
























