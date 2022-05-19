import React from 'react'
import { Route, Router } from 'react-router'
import BookDetail from '../component/BookDetail'
import Disploy from '../component/Disloy'
import TopHot from '../component/Disloy/TopHot'
import Favourite from '../component/Favourite'

export default function SetupRouter() {
    return (
        <>
            <Route exact path='/'>
                <Disploy/>
            </Route>

            <Route path='/home'>
                <Disploy/>
            </Route>

            <Route path='/trending' >
                <TopHot tophot={20} />
            </Route>

            <Route path='/favorite'> 
                <Favourite/>
            </Route>

            <Route path='/book/:title'>
                <BookDetail />
            </Route>

            


        </>
    )
}
