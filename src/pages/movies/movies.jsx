import React from 'react'
import PopMovie from '../../components/popular/movie'
import TopMovie from '../../components/toprated/movie'
import NowMovie from '../../components/nowplaying/movie'
import UpMovie from '../../components/upcoming/movie'

const MoviePage=()=>{
    return(
        <div className="mainpage">
            
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Popular Movies</h1>
                <PopMovie/>
            </div> 
           
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Top Rated Movies</h1>
                <TopMovie/>
            </div> 
            
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Now Playing Movies</h1>
                <NowMovie/>
            </div>
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Upcoming Movies</h1>
                <UpMovie/>
            </div> 
        </div>
    )
}
export default MoviePage