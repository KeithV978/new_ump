import Icon from "@mui/material/Icon"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"


const IconTextAlign = ({ icon, text, space, direction}) => {
    if(direction === "lr"){
         return(
        <Grid container alignItems="center" spacing={space || 2}>
            <Grid item>
                <Icon>{icon}</Icon>
            </Grid>
            <Grid item>
                <Typography>{text}</Typography>
            </Grid>
        </Grid>
    )
    }
    return(
        <Grid container alignItems="center" spacing={space || 2}>
            <Grid item>
                <Typography>{text}</Typography>
            </Grid>
            <Grid item>
                <Icon>{icon}</Icon>
            </Grid>
        </Grid>
    )
   
}

export default IconTextAlign