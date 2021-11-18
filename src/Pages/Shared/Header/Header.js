import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {

  const {user,logout} = useAuth();

    return (
        <Box sx={{ flexGrow: 1 , textAlign: 'left',  }}>
      <AppBar position="static"sx={{  bgcolor: 'text.primary'}} >
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,}}>
            Budget Cars
          </Typography>
          <Link to="/home">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/products">
            <Button color="inherit">Products</Button>
          </Link>
          <NavLink to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </NavLink>
          
          {/* <Button color="inherit">Login</Button> */}

          {
              user?.email ?
              <Link to='/home'><Button onClick={logout} color="inherit">Logout</Button></Link>
              :
              <Link to="/login"> <Button color="inherit">Login</Button></Link> 
          }

          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;