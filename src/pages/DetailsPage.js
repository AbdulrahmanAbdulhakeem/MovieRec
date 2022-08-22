import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function DetailsPage() {
  const [movieData , setMovieData] = useState([])
  let param = useParams()
  let movieDetails = []
  const fetchMovieById = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${param.details}?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`)
    .then(response => {
      movieDetails = response.data
      setMovieData(movieDetails)
    })
    .catch(error => {
      const errMsg = error.message
  })
  }

  useEffect(() => {
    fetchMovieById()
  }, [param.details])

  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage
