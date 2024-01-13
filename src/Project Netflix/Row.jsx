import { useEffect, useState } from "react"
import axios from "./axios"
import './Row.css'
import { useNavigate } from "react-router-dom"

const Row = ({title,fetchUrl,isLargeRow})=>{

    const navigate = useNavigate()

    const [movie,setMovie]=useState([])

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetch(){
            const request = await axios.get(fetchUrl)
            setMovie(request.data.results)
            return request
        }
        fetch()
    })
    return(
    <section>
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movie.map((movie)=>{
                    return(
                        
                    <img className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={movie.id} src={`${baseUrl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt='' onClick={()=>(navigate('/moive',{state:{movie}}))} ></img>
                    
                    )
                })}
            </div>
        </div>
        
    </section>
    )
}
export default Row