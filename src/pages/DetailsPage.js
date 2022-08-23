import React , {useState , useEffect} from 'react'
import Container from '@mui/material/Container'
import {myStyles} from '../component/MyStyles'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function DetailsPage() {
  const [movieData , setMovieData] = useState([])
  const [genre , setGenre] = useState([])

  let param = useParams()
  const fetchMovieById = () => {
    let movieDetails = []
    axios.get(`https://api.themoviedb.org/3/movie/${param.details}?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`)
    .then(response => {
      movieDetails = response.data
      setMovieData(movieDetails)
<<<<<<< HEAD
      setGenre(movieDetails.genres)
=======
>>>>>>> cfd20cb006bec5e75c9cf5072c52060edc6f53ed
    })
    .catch(error => {
      const errMsg = error.message
      return errMsg
  })
  }

  useEffect(() => {
    fetchMovieById()
  }, [param.details])

  return (
    <Container sx = {myStyles.body}>
          <div className='detail-container'>
            <div className = 'img-container'>
              <img src = {`http://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt = {movieData.title} />
            </div>
          <div className='content-details'>
            <h2>{movieData.title}</h2>
            <p>{movieData.overview}</p>
            
            <h2>Genre</h2>
            <div className='style-genre'>
            {genre.map(movie => (
              <p key = {movie.id}>{movie.name},</p>
            ))}
            </div>
            <div className="box-container">
              <div className="box">
            <h2>Original Release</h2>
            <p>{movieData.release_date}</p>
            </div>
            <div className="box">
            <h2>Running Time</h2>
            <p>{movieData.runtime}mins</p>
            </div>
            <div className="box">
            <h2>Vote Average</h2>
            <p>{movieData.vote_average}</p>
            </div>
            <div className="box">
            <h2>Vote Count</h2>
            <p>{movieData.vote_count}</p>
            </div>
            </div>
            </div>
          </div>
    </Container>
     
  )
}

export default DetailsPage
