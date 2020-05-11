import React, { useState, useEffect } from 'react'
import './nav.scss'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Nav = () => {
    const [desktop, setDesktop] = useState(true)
    
    const setDisplay = () => {
        window.innerWidth > 525
        ?
        setDesktop(true)
        :
        setDesktop(false)
    }

    useEffect(() => {
       window.addEventListener('resize', setDisplay)
       setDisplay()
    }, [desktop])

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