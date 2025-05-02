import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
     Avatar,
     Box,
     Divider,
     IconButton,
     ListItemIcon,
     Menu,
     MenuItem,
     Tooltip,
} from "@mui/material";
import { useState } from "react";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";

export default function Navigation({ user, search, setSearch, add, setAdd }) {
     const [anchorEl, setAnchorEl] = useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };
     return (
          <Box className="bg-[#399918] text-white flex justify-between items-center h-[10vh] px-3">
               <WhatsAppIcon sx={{ fontSize: "25px" }} />
               <p className="uppercase font-semibold text-2xl">
                    {user.username}
               </p>
               <Box className="flex gap-3 items-center">
                    <PersonSearchIcon
                         sx={{ fontSize: "25px" }}
                         className="cursor-pointer"
                         onClick={() => {
                              setSearch(!search);
                         }}
                    />
                    <Tooltip>
                         <IconButton
                              onClick={handleClick}
                              size="small"
                              sx={{ ml: 2 }}
                              aria-controls={open ? "account-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                         >
                              <MoreVertIcon
                                   sx={{ fontSize: "25px", color: "white" }}
                                   className="cursor-pointer"
                              />
                         </IconButton>
                    </Tooltip>
               </Box>
               <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                         paper: {
                              elevation: 0,
                              sx: {
                                   overflow: "visible",
                                   filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                   mt: 1.5,
                                   "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                   },
                                   "&::before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform:
                                             "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                   },
                              },
                         },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
               >
                    <MenuItem onClick={handleClose}>
                         <Avatar /> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem
                         onClick={() => {
                              setAdd(!add);
                              handleClose();
                         }}
                    >
                         <ListItemIcon>
                              <PersonAdd fontSize="small" />
                         </ListItemIcon>
                         Add New Friend
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                         <ListItemIcon>
                              <Logout fontSize="small" />
                         </ListItemIcon>
                         Logout
                    </MenuItem>
               </Menu>
          </Box>
     );
}
