import { ChevronRightRounded, MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";


const ExtraMenu = ({options}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)
    const handleClick = (event) =>  {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return(
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVert/>
            </IconButton>

            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch'
                    }
                }}
            >
                {options.map((option) => {
                    return <MenuItem key={option} onClick={handleClose}>
                              {option} {option === "Choose category"? <ChevronRightRounded/>: null}
                           </MenuItem>
                })}

            </Menu>
        </div>
    )
}

export default ExtraMenu;