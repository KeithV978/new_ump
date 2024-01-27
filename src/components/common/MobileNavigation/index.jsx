import PropType from 'prop-types';
import React from 'react';
import {HOME, SIGNIN} from '../../../constants/routes'
import { Link, useLocation } from 'react-router-dom';
import { Avatar as UserNav, Box, Button, Typography } from '@mui/material';
import Badge from '../Badge'
import FiltersToggle from '../Filters/FiltersToggle';
import { SearchBar } from '../SearchBar';
import { Filter2Rounded } from '@mui/icons-material';

const Navigation = (props) => {
    const { isAuthenticating, disabledPaths, user} = props;

    const { pathname } = useLocation()

    const onClickLink = (event) => {
        if(isAuthenticating) event.preventDefault();
    }

    return(
        <nav>
           <Box>
            <Box>
                    <Link onClick={onClickLink} to={HOME}>
                        <Typography variant='h3'>Uniben Marketplace</Typography>
                    </Link>
                </Box>

                <Box>
                    <ul>
                        {user ? (<li><UserNav/></li>): (
                            <>
                            {pathname !== SIGNIN && (
                                <li>
                                    <Link
                                        onClick={onClickLink}
                                        to={SIGNIN}>
                                            Sign In
                                    </Link>
                                </li>
                            )}
                            </>
                        )}
                    </ul>
                </Box>
           </Box>

           <Box>
            <SearchBar/>
            <FiltersToggle>
                <Button
                    type="Submit"
                    // fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2}}
                >
                    <Filter2Rounded/>
                </Button>
            </FiltersToggle>
           </Box>
        </nav>
    )
}


Navigation.propTypes = {
    isAuthenticating: PropType.bool.isRequired,
    basketLength: PropType.number.isRequired,
    disabledPaths: PropType.arrayOf(PropType.string).isRequired,
    user: PropType.oneOfType([
      PropType.bool,
      PropType.object
    ]).isRequired
  };
  
  export default Navigation;
  