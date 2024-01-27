import { styled } from "@mui/material"

const Wrapper = styled('p')(({ theme }) => ({
    padding: '.3rem 0',
    color: [theme.palette.tertiary.main],
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderRadius: '25px',
    textAlign: 'left',
    fontSize: '.8rem',
    // overflow: 'hidden',
    margin: 0
})) 

const index = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default index