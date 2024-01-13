import { BrowserRouter,Routes,Route } from "react-router-dom"
import Row from './Project Netflix/Row'
import requests from './Project Netflix/Request'
import Header from './Project Netflix/Header'
import Movie from "./Project Netflix/Movie"
import Cast from "./Project Netflix/Cast"
import Navbar from './Project Netflix/Navbar'
import Footer from './Project Netflix/Footer'
import Login from './Project Netflix/Login'

const App = () => {

    return(
        <BrowserRouter>
                        <Navbar/>
                <Routes>
                        <Route path="/" element={
                            <>
                            <Header/>
                            <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
                            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
                            <Row title='Top_Rated Movies' fetchUrl={requests.fetchTopRated}/>
                            <Row title='Upcoming Movies' fetchUrl={requests.fetchUpcoming}/>
                            <Row title='Comedy Movies' fetchUrl={requests.fetchActionMovies}/>
                            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
                            <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies}/>
                            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
                            <Footer/>
                            </>
                        }></Route>
                       <Route path="/moive" element={<Movie/>}/>
                       <Route path='/cast' element={<Cast/>}/>
                       <Route path="/login" element={<Login/>}/>
                </Routes>
        </BrowserRouter>
    )
}
export default App
