import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListProduc from './ListProduc';
import Cart from './Cart'
function BasicNavbar() {
    return (
        <div className='container'>
            <div className='container_products'>
                <div className='navbar_container'>
                    <Box>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                >
                                    List Product
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </div>
                <div>
                    <ListProduc />
                </div>
            </div>
            <div className="cart_product">
                <Cart />
            </div>
        </div>
    );
}

export default BasicNavbar;