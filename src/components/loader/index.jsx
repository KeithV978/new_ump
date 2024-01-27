import { LinearProgress, Box } from "@mui/material";


const Loader = () => {
  return (
    <Box sx={{position: 'absolute',top:0, zIndex: '100000', width: '100%' }}>
        <LinearProgress color='tertiary' sx={{height: `.3rem`}}/>
    </Box>
  )
}
export default Loader;