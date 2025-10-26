import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

interface LinkButtonProps {
    to: string,
    // children: React.ReactNode,
    text: string
}

const LinkButton: React.FC< LinkButtonProps > = (({to, text}) => {
        
        return (
        <Link to={to}>
            <Button variant="outlined" >{text}</Button>
        </Link>
        )
    })

export default LinkButton