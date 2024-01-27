import { styled } from '@mui/material'

const Wrapper = styled('div')(()=> ({
    margin: '.1rem 0',
    fontSize: '.9rem',
    // boxShadow: '1px 12px 20px #dbdbdb',
    padding: '.3rem',
    'p': {
     fontSize: '1.1rem' 
    }
}))

export default function Output({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}
