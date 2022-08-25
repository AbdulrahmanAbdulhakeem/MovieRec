import React , {useState , useEffect} from 'react'
import Container from '@mui/material/Container'
import {myStyles} from '../component/MyStyles'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function DetailsPage() {
  const [movieData , setMovieData] = useState([])
  const [genre , setGenre] = useState([])
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState('')

  let param = useParams()
  const fetchMovieById = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${param.details}?api_key=${process.env.REACT_APP_SECRET_KEY}`)
    .then(response => {
      setLoading(false)
      setMovieData(response.data)
      setGenre(response.data.genres)
    })
    .catch(error => {
      const errMsg = error.message
      setError(errMsg)
  })
  }

  useEffect(() => {
    fetchMovieById()
    console.log(movieData)
  }, [param.details])

  return (
    <Container sx = {myStyles.body}>
          <div className='detail-container'>
            <div className = 'img-container'>
              <img src = {`http://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`} alt = {movieData.title} />
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
