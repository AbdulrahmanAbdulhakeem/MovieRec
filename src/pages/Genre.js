import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Genre() {
    let param = useParams()
    // console.log(process.env.REACT_APP_SECRET_KEY)

    const fetchMovieGenre = () => {
        let movies = []
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&page=1&with_genres=${param.genre}`)        
        .then(response => {
            movies = response.data.results
            console.log(movies)
            console.log('I think its here')
        })
        .catch(error => {
            const errMsg = error.message
        })
    }

    useEffect(() => {
        // console.log(param.genre)
        fetchMovieGenre()
    },[param.genre])

  return (
    <div className='container'>Genre</div>
  )
}

export default Genre