import React , {useState}from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { DrawerItem } from './DrawerItem'
import {useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import { myStyles } from './MyStyles'

const drawerWidth = 240;

function Mydrawer(props) {

  let navigate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mealSearch , setMealSearch] = useState('')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/searchresults/' + mealSearch)
    setMealSearch('')
  }

  const drawer = (
    <div>
      <Toolbar>
        <div className="img-container">
        <Typography variant = 'h6' sx = {{display: 'block'}}>
          <span>Made Possible by :</span>
        </Typography>
        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='TMDB API'/>
        </div>
      </Toolbar>
      <Divider / >
      <List>
          {DrawerItem.map((item, index) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => navigate(item.route)} >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height:'10.3%',
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className='form-style'>
          <Typography variant="h6" sx = {myStyles.paragraph}><span>Movie </span>Rec</Typography>
         <form onSubmit = {handleSubmit} >
        <TextField 
        id="input-with-icon-textfield"
        placeholder='Search'
        sx = {myStyles.field}
        value = {mealSearch}
        onChange = {(e) => setMealSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      
        </form>
         </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Mydrawer;