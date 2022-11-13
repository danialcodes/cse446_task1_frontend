import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const navItems = ['Movies', 'AddMovies', 'Contact'];

  return (
      <AppBar component="nav" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1}}
          >
            <NavLink to={`/`}>Movie Database</NavLink>
            
          </Typography>
          <Box >
            {navItems.map((item) => (
              <NavLink key={item} to={`/${item.toLowerCase()}`}>
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
  );
}



export default Navbar;