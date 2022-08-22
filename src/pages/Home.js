import React , {useState , useEffect} from 'react'
import Container from '@mui/material/Container'
import axios from 'axios'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import {myStyles} from '../component/MyStyles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from 'react-router-dom'
 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  let movies = []


function Home() {
    const [popular , setPopular] = useState([])

    const fetchTrendingContent = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&page=1`)        
        .then(response => { 
            movies = response.data.result
            setPopular(response.data.results)
        })
        .catch(error => {
            const errMsg = error.message
        })
    } 
    useEffect(() => {
        fetchTrendingContent()
    },[])

  return (
    <Container 
    sx = {myStyles.body}
    >
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {popular.map((movie) => (
          <Link to = {'/detailspage/' + movie.id} key={movie.id}>
          <Grid item xs={6} md={4}>
            <Card sx={myStyles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt= {movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx = {{fontSize:'1rem',color:'orange'}}>
          {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
          </Link>
        ))}
      </Grid>
    </Box>
    </Container>

// </ThemeProvider>
  )
}

export default Home
