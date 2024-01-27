import { SellerHeader } from '../Components/Common'
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import {Box} from '@mui/material'

const SellerRoute = ({
    isAuth, component: Component, ...rest
}) => (
    <Route
    {...rest}
    component={(props) => (
        isAuth? (
            <>            
            <Box>
                <SellerHeader/>
                <Box>
                    <Component {...props} />
                </Box>
            </Box>
            </>
        ) : <Navigate to="/"/>
    )}
    />
);

const mapStateToProps = ({ auth }) => ({
    isAuth: !!auth,
})

SellerRoute.defaultProps = {
    isAuth: false,
};

SellerRoute.propTypes = {
    isAuth: PropType.bool,
    role: PropType.string,
    component: PropType.func.isRequired,
    rest: PropType.any
};

export default connect(mapStateToProps)(SellerRoute);