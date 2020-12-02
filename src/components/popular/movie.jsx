import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MovieGridList from '../list/movielist'

const PopMovies=()=>{
    const [movies , setMovies]=useState()
    
    const getMovies=async()=>{
       try{ 
        const response =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`) 
        setMovies(response.data.results)
        }catch(err){
            console.log(err)
        }
  }  
    useEffect(()=>{
        getMovies()      
    },[])

    return(
        <MovieGridList List={movies}/>
    )

}
export default PopMovies