import React from 'react'
import PopTv from '../../components/popular/tv'
import TopTv from '../../components/toprated/tv'
import NowTv from '../../components/nowplaying/tv'
import UpTv from '../../components/upcoming/tv'

const TvPage=()=>{
    return(
        <div className="mainpage">
            
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Popular TV Shows</h1>
                <PopTv/>
            </div> 
           
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Top Rated TV Shows</h1>
                <TopTv/>
            </div> 
            
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Airing TV Shows</h1>
                <NowTv/>
            </div>
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Airing Today TV Shows</h1>
                <UpTv/>
            </div> 
        </div>
    )
}
export default TvPage