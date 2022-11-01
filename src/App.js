import { Fragment, useState } from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import Home from './pages/home'
import Products from './pages/products'
import AboutUs from './pages/aboutus'
import Buy from './pages/buy'

import logo from './assets/logo.png'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/ToolBar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Image from 'mui-image'
import { Typography, useMediaQuery, Menu, MenuItem } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const navItems = ['Products', 'About Us', 'Buy']

  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('sm'));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Fragment>
        <AppBar position="fixed" component="nav" sx={{bgcolor: "white"}}>
          <Toolbar>
            <Box px={1}>
                <Image src={logo} height={40}/>
            </Box>
            <Box flexGrow={1} />
            {
              isMobile ?
                <Box>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClickMenu}
                    >
                      <MenuIcon />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => navigate('/products')}>Products</MenuItem>
                      <MenuItem onClick={() => navigate('/products')}>About Us</MenuItem>
                      <MenuItem onClick={() => navigate('/products')}>Buy</MenuItem>
                    </Menu>
                </Box>
              : <Box display={{sm:'block'}} px={5}>
                    {navItems.map((item) => (
                      <Button style={{textTransform: 'none'}} size="large" key={item} sx={{color: '#000'}} px={1}>{item}</Button>
                    ))}
                </Box>
            }
          </Toolbar>
        </AppBar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/buy" element={<Buy />} />
        </Routes>
        <AppBar position="static" sx={{ bgcolor: '#25F522', top: 'auto', bottom: 0 }}>
            <Box p={isMobile?3:5} px={isMobile?2:10} mt={isMobile?0:2}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography>Contact</Typography>
                        <Typography>About Us</Typography>
                        <Typography>Terms & Conditions</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Careers</Typography>
                        <Typography>Change country</Typography>
                        <Typography>FAQ</Typography>
                    </Grid>
                </Grid>
            </Box>
        </AppBar>
    </Fragment>
  );
}

export default App;
