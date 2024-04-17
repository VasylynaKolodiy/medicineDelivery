import './Header.scss'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='header container'>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link className='logo' to="/">Shop</Link>
            <span> | </span>
            <Link className='logo' to="/basket">Basket</Link>
            <span> | </span>
            <Link className='logo' to="/history">History</Link>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;