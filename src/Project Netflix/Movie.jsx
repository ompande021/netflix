import { useState } from "react"
import { useLocation } from "react-router-dom"
import YouTube from 'react-youtube';

import { useNavigate } from "react-router-dom"

const Movie =()=>{
    const location = useLocation()
    const specificMovie = location.state.movie
    const baseUrl = 'https://image.tmdb.org/t/p/original/'

    const navigate = useNavigate()
    
    const [trailer, setTrailer] = useState();
    const [Cast, setCast] = useState([]);

    function fetchTrailer(id){
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=e24d9bb89141cf200fe7e2d0e783bf87&append_to_response=videos`)
        .then(res=>res.json())
        .then(d=>setTrailer(d.results[0].key))
    }

    function fetchCast(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e24d9bb89141cf200fe7e2d0e783bf87&language=en-US`)
        .then(res=>res.json())
        .then(d=>setCast(d.cast))
    }

    const opts = {
        height: '400',
        width: '100%',
        }

    return(
        <div>
        <div className="banner" style={{
                                        backgroundSize:'cover', 
                                        backgroundImage:`url("${baseUrl}/${specificMovie?.backdrop_path}")`, 
                                        backgroundPosition:'center-center',}}>
            <div className="banner_contents">
                <h1 className="banner_title">{specificMovie.original_title || specificMovie.original_name || specificMovie.name}</h1>
            </div>
            <div className="banner_buttons">
                <button className="banner_button" onClick={fetchTrailer(specificMovie.id)}>Play</button>
                <button className="banner_button" onClick={fetchCast(specificMovie.id)}>Cast</button>
            </div>
            <h1 className="banner_description">{specificMovie.overview}</h1>
        </div>
            <div>
                <h1 style={{color:"white"}}>Movie Cast</h1>
                {Cast.slice(0,10).map((cast) => {
                    return(
                        
                        <img key={cast.id} src={`${baseUrl}${cast.profile_path}`} alt="" height={'100px'} width={'100px'} style={{borderRadius:'50%',margin:'10px'}} onClick={()=>(navigate('/cast',{state:{cast}}))} ></img>
                       
                    )
                })}
            </div>
            <hr />
            <div>
                <h1 style={{color:"white"}}>Movie Trailer</h1>
                {trailer && <YouTube videoId={trailer} opts={opts} />}
            </div>

        </div>

    )
}
export default Movie