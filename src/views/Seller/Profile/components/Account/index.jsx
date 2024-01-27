import { Box, Button, styled, Typography } from "@mui/material";
import profileBanner from "../../../../../Assets/Images/account/profileBanner.jpg";
import { AccountCircleRounded, AddCircleRounded, BorderColorRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";

const ProfilePhotoWrapper = styled("div")(() => ({
  width: {sm:"150px",xs: '180px'},
  height: "150px",
  borderRadius: "50%",
}));
const Account = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${profileBanner})`,
          height: "100%",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ProfilePhotoWrapper>
          <AccountCircleRounded
            sx={{
              color: "#f3b74a",
              fontSize: { xs: "5rem", sm: "7rem" },
              backgroundColor: "#fff",
              borderRadius: "50%",
              ml: 2,
              mt: {sm:12, xs:13}
            }}
          />
        </ProfilePhotoWrapper>
        <Box sx={{float: 'right',mr: 2}}>
            <Button 
                variant="contained"
                sx={{marginTop: -2,fontSize: '.9rem',backgroundColor: '#282828'}}>
                    <BorderColorRounded sx={{fontSize: '.9rem'}}/> {'  '}Edit Account
            </Button>
        </Box>
      </Box>
      <Box sx={{ mt: {sm: 10, xs: 8}, ml: 2, mr:1 }}>
        <Box sx={{pb:3}}>
          <Typography sx={{ color: "#ccc", fontSize: ".9rem" }}>FULL NAME</Typography>
          <Typography variant="p">{profile.fullname}</Typography>
        </Box>
        <Box sx={{pb:3}}>
          <Typography sx={{ color: "#ccc", fontSize: ".9rem" }}>EMAIL</Typography>
          <Typography variant="p">{profile.email}</Typography>
        </Box>
        <Box sx={{pb:3}}>
          <Typography sx={{ color: "#ccc", fontSize: ".9rem" }}>PHONE</Typography>
          <Typography variant="p">{'+234812345678'}</Typography>
        </Box>
        <Box sx={{pb:3}}>
          <Typography sx={{ color: "#ccc", fontSize: ".9rem" }}>DATE </Typography>
          <Typography variant="p"> {new Date().toLocaleDateString()}</Typography>
        </Box>
        <Box sx={{pb:3}}>
          <Button 
            variant="outlined" 
            sx={{ color: "primary.main", fontSize: {xs: '1rem',sm:'.9rem'} }} 
            href='/seller/product/add'
            >Add A Product{' '} 
            <AddCircleRounded sx={{fontSize: 'inherit', color: 'primary.main' }}/> 
            </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
