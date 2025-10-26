import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

interface LinkButtonProps {
    to: string,
    children: React.ReactNode
}

const LinkButton: React.FC< LinkButtonProps > = (({to, children}) => {
        
        return (
        <Link to={to}>
            <Button variant="outlined" >{children}</Button>
        </Link>
        )
    })

export default LinkButton