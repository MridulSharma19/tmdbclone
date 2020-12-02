import React from 'react'
import PopMovie from '../../components/popular/movie'
import PopTv from '../../components/popular/tv'

const HomePage=()=>{
    
    

    return(
        <div className="homepage">
            <div style={{margin:'10%'}} className="popmovies">
            <h1 style={{alignContent:"left"}}>Popular Movies</h1>
                <PopMovie/>
            </div> 
            <div style={{margin:'10%'}} className="poptv">
            <h1 style={{alignContent:"flex-start"}}>Popular TV Shows</h1>
                <PopTv/>
            </div>
        </div>
    )
}
export default HomePage