import React, { useState, useEffect } from 'react'
import './nav.scss'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Nav = () => {
    const [desktop, setDesktop] = useState('')

    useEffect(() => {
       window.addEventListener('resize', setDisplay)
    }, [])

    const setDisplay = () => {
        window.innerWidth > 500
        ?
        setDesktop(true)
        :
        setDesktop(false)
    }

    return (
        <div>
            {
                desktop
                ?
                <Desktop />
                :
                <Mobile />
            }
        </div>
    )
}

export default Nav