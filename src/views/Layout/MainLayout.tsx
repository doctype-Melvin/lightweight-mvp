import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return (
        <>
        <div>
            <h3>Lightweight</h3>
        </div>
        <Outlet />
        <div>
            <small>Footer</small>
        </div>
        </>
    )
}