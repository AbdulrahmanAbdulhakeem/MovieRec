import HomeIcon from '@mui/icons-material/Home'
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp'
import AllInclusiveSharpIcon from '@mui/icons-material/AllInclusiveSharp'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import FaceIcon from '@mui/icons-material/Face';
import AnchorIcon from '@mui/icons-material/Anchor';

export const DrawerItem = [
    {
        id:0,
        label:'Trending',
        icon:<HomeIcon />,
        route:'/'
    },
    {
        id:1,
        label:'Action',
        icon:<WhatshotIcon />,
        route:'/genre/10759'
    },
    {
        id:2,
        label:'Animation',
        icon:<ChildCareSharpIcon />,
        route:'/genre/16'
    },
    {
        id:3,
        label:'Fantasy',
        icon:<AllInclusiveSharpIcon />,
        route:'/genre/10765'
    },
    {
        id:4,
        label:'Reality',
        icon:<FaceIcon />,
        route:'/genre/10764'
    },
    {
        id:5,
        label:'Adventure',
        icon:<AnchorIcon />,
        route:'/genre/12'
    },
]