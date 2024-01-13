import { useState,useEffect } from "react"
import axios from "./axios"
import requests from "./Request"
import { useNavigate } from "react-router-dom"

import './Header.css'

const Header= () =>{
    
    const [movie,setMovie]= useState([])
    const navigate = useNavigate()


    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetch(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            return request
        }
        fetch()
    },[])


    return(
        <div className="banner" style={{
                                        backgroundSize:'cover', 
                                        backgroundImage:`url("${baseUrl}/${movie?.backdrop_path}")`, 
                                        backgroundPosition:'center-center',}}>
            <div className="banner_contents">
                    <h1 className="banner_title">{movie.original_title || movie.original_name}</h1>
            </div>
            <div className="banner_buttons">
                <button className="banner_button" onClick={()=>(navigate('/moive',{state:{movie}}))}>Play</button>
                <button className="banner_button" onClick={()=>(navigate('/moive',{state:{movie}}))}>Cast</button>
            </div>
            <h1 className="banner_description">{movie.overview}</h1>
           
        </div>
    )
}
export default Header