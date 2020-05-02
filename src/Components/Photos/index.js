import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import calfood from '../../Assets/calfood.png'
import calhome from '../../Assets/calhome.png'
import calmeals from '../../Assets/calmeals.png'
import calweight from '../../Assets/calweights.png'
import calmenu from '../../Assets/calmenu.png'
import dashboard from '../../Assets/Dashboard.png'
import gameplay from '../../Assets/Gameplay.png'
import addmap from '../../Assets/AddMap.png'
import additems from '../../Assets/additems.png'
import addlist from '../../Assets/addlist.png'
import listermain from '../../Assets/listermain.png'
import semain from '../../Assets/semain.png'
import seadd from '../../Assets/seadd.png'
import secard from '../../Assets/secard.png'

const list = [
    {
        photo: listermain, 
        desc: `user's dashboard view of their lists`
    },
    {
        photo: addlist, 
        desc: `users can add a new list`
    },
    {
        photo: additems, 
        desc: `new items added will appear on modal and load on the list in the background`
    }
]

const cal = [
    {
        photo: calhome, 
        desc: `user's dashboard, which shows navigation and a graph of their daily calorie and weight logs`
    }, 
    {
        photo: calfood, 
        desc: `desktop view of an individual meal log`
    }, 
    {
        photo: calweight,
        desc: `mobile view of the main weight log page, which shows all of the user's logged weights`
    },
    {
        photo: calmenu, 
        desc: `mobile view of the menu, which is rendered based off the window width, and can be opened and closed using the hamburger menu`
    }, 
    {
        photo: calmeals, 
        desc: `desktop view of a user's entire meal log`
    }
]

const btl = [
    {
        photo: dashboard, 
        desc: `view of a user's dashboard, where they can create or join a game, see their wins and losses, and see a leaderboard of all players`
    }, 
    {
        photo: addmap, 
        desc: `this page allows users to create maps to play games with, it's coded to not allow illegal placements and not be able to save until all pieces are placed and the map is named`
    },
    {
        photo: gameplay, 
        desc: `shows the gameboard when you're playing against another player, the pink map shows what moves your opponent has made against you and the blue shows your moves against them.`
    }
]

const shut = [
    {
        photo: semain, 
        desc: `the main view of this app, which contains both a form to add a log to the tracker as well as a display of the logs`
    }, 
    {
        photo: seadd, 
        desc: `i implemented react-date-picker in this app and customized the css to match the rest of the page`
    }, 
    {
        photo: secard, 
        desc: `close up of one of the log cards. i request the sunrise and sunset times from an API and i designed the icons myself`
    }
]




const Photos = ({ id, setPhotos }) => {
    const [project, setProject] = useState([])

    useEffect(() => {
        id === 'list' ?
        setProject(list)
        : id === 'cal' ?
        setProject(cal)
        : id === 'shut' ?
        setProject(shut)
        : setProject(btl)
    }, [id])

    const mappedPhotos = project.map(photo => {
        return (
            <div key={photo.desc}>
                <img src={photo.photo} alt='screenshot' style={style.photo}/>
                <p>{photo.desc}</p>
            </div>
        )
    })

    return (
        <div style={style.container}>
            <button style={style.button} className='close-pics' onClick={() => setPhotos('')}>Close Photos</button>
            <Carousel style={style.caro}>
                {mappedPhotos}
            </Carousel>
            <button style={style.button} className='close-pics' onClick={() => setPhotos('')}>Close Photos</button>
        </div>
    )
}

export default Photos

let green = '#2FDA77'
let blue = '#000F46'

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    photo: {
        width: '80%',
        margin: '0 auto',
        marginTop: 20
    },
    button: {
        width: 120,
        height: 20,
        background: green,
        border: 'none',     
        color: blue,
        marginBottom: 20
    }
}