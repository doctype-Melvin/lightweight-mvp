import './style.css'
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return (
    <section id="main-layout-container">
        <div className='header-container'>
            <h3>Lightweight</h3>
        </div>
            <Outlet />
        <div className='footer-container'>
            <p>Placeholder</p>
        </div>
    </section>
    )
}