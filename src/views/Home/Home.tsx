import { Button } from "@mui/material"
import type React from "react"
import { Link } from "react-router-dom"

export default function Home(){
    // Make this button its own component
    const LinkButton: React.FC< {to: string, children: React.ReactNode }> = (({to, children}) => {
        
        return (
        <Link to={to}>
            <Button variant="outlined">{children}</Button>
        </Link>
        )
    })

    return (
        <>
            <LinkButton to="/log">log session</LinkButton>
            <LinkButton to="/stats">view statistics</LinkButton>
            <LinkButton to="/create">create program</LinkButton>
        </>
    )
}