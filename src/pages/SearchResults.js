import React , {useState , useEffect} from 'react'
import Container from '@mui/material/Container'
import axios from 'axios'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {myStyles} from '../component/MyStyles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function SearchResults() {
    const [movieData , setMovieData] = useState([])

    let param = useParams()
  const fetchMovieBySearch = () => {
    let movieDetails = []
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&page=1&with_text_query=${param.search}`)
    .then(response => {
      movieDetails = response.data.results
      console.log(movieDetails)
      setMovieData(movieDetails)
    })
    .catch(error => {
      const errMsg = error.message
      return errMsg
  })
  }

  useEffect(() => {
    fetchMovieBySearch()
    console.log(param.search)
  }, [param.search])

  return (
    <div className="container">
        <Container 
    sx = {myStyles.body}
    >
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {movieData.map((movie) => (
          <Grid item xs={6} md={4}>
            <Card sx={myStyles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`}
          alt= {movie.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx = {{fontSize:'1rem',color:'orange'}}>
          {movie.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    </div>
  )
}

export default SearchResults