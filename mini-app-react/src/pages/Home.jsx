import React from 'react'
import { useUser } from '../context/UserContext'

export function Home() {
    const context = useUser();

    return (
        <>
            <h1>{`Bienvenid@ ${context.user?.name || ""} `}</h1>
           
        </>
    )
}

