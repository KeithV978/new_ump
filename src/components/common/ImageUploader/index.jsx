import { styled } from "@mui/material"

const Wrapper = styled('label')(() => ({
   display: 'inline-block',
   border: '.1rem dashed #ccc',
   width: 'fit-content',
   padding: '.7rem 1rem',
   borderRadius: '30px',
   alignItems: 'center',
   margin: '1rem 0',
   cursor: 'pointer'
  }))
const ImageUploader = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)

  export default ImageUploader