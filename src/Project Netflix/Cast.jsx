import { useLocation } from "react-router-dom"
import './Cast.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Cast=()=>{
    const location = useLocation()
    const specificCast = location.state.cast
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    
    const navigate = useNavigate()

    const [castM, setCastM] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${specificCast.id}/combined_credits?api_key=e24d9bb89141cf200fe7e2d0e783bf87&language=en-US`)
        .then(res=>res.json())
        .then(d=>setCastM(d.cast))
    },[] );

    return(
        <aside>
            <div className="Cast">
                <img id="castimg" src={`${baseUrl}${specificCast.profile_path}`} alt="" ></img>
                <h1>{specificCast.name}</h1>
                <p>{specificCast.character}</p>
                <p>{specificCast.known_for_department}</p>
            </div>

            <p style={{color:'white',fontSize:"40px",fontWeight:'900'}}>Movies</p>
            <div style={{height:'auto',width:'100%',display:'flex',justifyContent:'space-around',flexWrap:"wrap"}}>
                {castM.map((movie)=>{
                    return(
                        <main key={movie}>
                            <h2 style={{color:'white',width:'300px',height:'auto'}}>{movie.original_title}</h2>
                            <hr />
                            <img src={`${baseUrl}${movie.poster_path}`} height={'400px'} width={'300px'} alt={movie.original_title} style={{color:'white'}} onClick={()=>(navigate('/moive',{state:{movie}}))}/>
                            <p style={{color:'white',height:'auto',width:'300px'}}>{movie.overview}</p>
                        </main>
                    )
                })}
            </div>
            
        </aside>
    )
}
export default Cast

//https://api.themoviedb.org/3/search/person?api_key=e24d9bb89141cf200fe7e2d0e783bf87&query=${specificCast.name} d.results

//https://api.themoviedb.org/3/person/${specificCast.id}/combined_credits?api_key=e24d9bb89141cf200fe7e2d0e783bf87&language=en-US d.cast