import React,{useState,useEffect} from 'react'
import axios from 'axios'
import TvGridList from '../list/tvlist'

const UpTv=()=>{
    const [tv , setTV]=useState()
    const getTv=async()=>{
        try{
            const response =await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`) 
        setTV(response.data.results)
        }catch(err){
            console.log(err)
        }}
        useEffect(()=>{
            
            getTv()
        },[])
        return(
            <TvGridList List={tv}/>
        )
}
export default UpTv