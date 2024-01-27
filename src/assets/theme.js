import {createTheme} from '@mui/material/styles'
import poppins from './Fonts/Sora-VariableFont_wght.ttf'


const theme = createTheme({
    palette:{
        primary:{
            main: `#581254`,
            light: `#CD7DDC`
        },       
        secondary:{
            main: `#AE2F83`,
            light: `#DC7DBB`
        },
        tertiary: {
            main: `#E91E63`,
            light: `#9E7DDC`
        },
        inputs: '#f6f6f6'
    },
    shape:{
        borderRadius: 16
    },
    typography: {
        fontFamily: poppins,
        body1:{
            fontSize: '1rem',
            '@media (max-width: 600px)':{
                fontSize: '0.9rem'
            },
            '@media (max-width: 400px)':{
                fontSize: '0.8rem'
            }
        },
        h1:{
            fontSize: '1rem',
            '@media (max-width: 600px)':{
                fontSize: '1.5rem'
            },
            '@media (max-width: 400px)': {
                fontSize: '1.2rem'
            }
        }, 
    },
    components: {
        MuiInput:{
            styleOverrides: {
                root: {
                    borderRadius: '40px',
                    '&:before': {
                        borderColor: 'none'
                    }
                }
            }
        }
    }
})



export default theme

// primary.main: `#7d2278`
// primary.light: `#D7A1F9`

// secondary.main: `#FF5722`
// secondary.light: `#EE9376`

// tertiary.main: `#E91E63`
// tertiary.light: `#E16791`