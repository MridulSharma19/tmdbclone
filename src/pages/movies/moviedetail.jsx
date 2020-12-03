import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import MovieGridList from '../../components/list/movielist'

const MovieDetail=({match,history})=>{    
    const [result,setResult]=useState()
    const[sim,setSim]=useState()      
    const getRes=async()=>{
       try{
            const response= await axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=API_KEY&language=en-US`)
            
            setResult(response.data)
            
        }catch(err){
            console.log(err)
        }
    }
    const getSim=async()=>{
        try{
            const response= await axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/similar?api_key=API_KEY&language=en-US&page=1`)
            setSim(response.data.results)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getRes()
        getSim()
    },[match.params.id])

    return(
        <div className="movdet">
            {result?
            <div className="wrap">
            <div className="deta" style={{margin:'8%',display:"flex"}}>
            <img style={{width:"10%" , alignContent:"left", margin:"2%"}} src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`} alt=""/>
            <h2 style={{margin:'2%',alignSelf:'flex-end'}}>{result.title}</h2>
            <h4 style={{margin:'2%',alignSelf:'flex-end'}}>Rating:{result.vote_average}/10 </h4>
            <h4 style={{margin:'2%',alignSelf:'flex-end'}}>{result.vote_count} votes </h4>
            </div>
            <p style={{marginLeft:'10%',marginRight:'10%',fontStyle:"italic", textAlign:'justify'}}>{result.tagline}</p> 
            <p style={{marginLeft:'10%',marginRight:'10%', textAlign:'justify'}}>{result.overview}</p>
            </div>:
            null
            }
            <div className="sim" style={{margin:'8%'}}>
                <h1>Similar Movies</h1>
            <MovieGridList List={sim}/>
            </div>
        </div>
    )

}

export default withRouter(MovieDetail)