import {Box, Typography} from '@mui/material'
import NoDataImage from '../../../../../Assets/Images/account/undraw_no_data_re_kwbl.svg'

const RequestPool = () => {
    return(
        <Box>
            <div style={{width: '20rem'}}>
                <img src={NoDataImage} alt="No data" width={100}/>
                <Typography>No Request in the general Pool</Typography>
                <Typography variant='body2'>Coming Soon...</Typography>
            </div>
        </Box>
    )
}

export default RequestPool;