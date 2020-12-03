import React,{useState} from 'react'
import {Link,withRouter} from 'react-router-dom'


const Header=({history})=>{
    const[query,setQuery]=useState()
    const handleChange=(e)=>{
        const {value} = e.target
        setQuery(value)
           
        }
    const handleSubmit=(e)=>{
        e.preventDefault()
        history.push(`/search/${query}`)
    }    
    return(
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'>
                <a class="navbar-brand" >Clone</a>
                </Link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item ">
                        <Link to='/movie'>
                        <a class="nav-link" >Movie <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/tv'>
                        <a class="nav-link" >TV Shows</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/more'>
                            <a class="nav-link " >More</a>
                        </Link>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                    <input class="form-control mr-sm-2" type="search" onChange={handleChange} value={query} placeholder="Search Movies,TV Shows" />
                    
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                   
                    </form>
                </div>
            </nav>
        </div>
    )
}
export default withRouter(Header)