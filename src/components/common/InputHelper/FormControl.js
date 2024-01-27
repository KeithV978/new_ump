import { styled } from "@mui/material"

const Wrapper = styled('div')(() => ({
    'label':{ color: '#6a6a6a', padding: '.5rem'},
    marginTop: '1rem',
  }))


  const FormControl = ({ children }) => (
    <Wrapper>
      {children}
    </Wrapper>
  )
  export default FormControl;