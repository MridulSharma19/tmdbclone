import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


const SearchPage=({match,history})=>{    
    const [results,setResult]=useState()
    const [page,setPage]=useState(1)
    const handleClick=(item)=>{
        history.push(`/${item.media_type}/${item.id}`)
    }
    
    const getRes=async()=>{
       try{
            const response= await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=API_KEY&language=en-US&query=${match.params.query}&page=${page}&include_adult=true`)
            setResult(response.data.results)
            
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getRes()
    },[page,match.params.query])
    
    return(
        <div>
            <h1 style={{margin:'4%'}}>Search Results for {match.params.query}</h1>
        <div className="search" style={{display:'flex',marginTop:'8%',margin:'10%',flexFlow:'row wrap'}}>
         
            
            {results?results.map((item)=>(
                <div className="item" style={{display:'flex',margin:"2%", flexFlow:'column'}} >
                    <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} onClick={()=>handleClick(item)} alt={item.title?item.title:item.name}/>
                <span>{item.title?item.title:item.name}</span>
                </div>
                
                
            )):null}
            

        </div>
        <div className="pagin" style={{marginBottom:'5%'}}>
          {page!==1?<NavigateBeforeIcon onClick={()=>setPage(page-1)}/> : null } Page {page}   <NavigateNextIcon onClick={()=>setPage(page+1)} /> 
      </div>
        </div>
    )
}
export default withRouter(SearchPage)