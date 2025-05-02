import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function StackComponent({ content, value, setValue, icon }) {
     const ispass = content === "Password" || content === "Confirm Password";
     const [showPassword, setShowPassword] = useState(false);

     return (
          <Stack
               direction="row"
               spacing={2}
               alignItems="end"
               sx={{ justifyContent: "center", width: "80%" }}
          >
               <IconButton
                    sx={{
                         backgroundColor: "#399918",
                         color: "white",
                         width: "45px",
                         height: "30px",
                         borderRadius: "5px",
                         padding: "5px",
                         "&:hover": {
                              backgroundColor: "#399918",
                         },
                    }}
                    focusRipple={false}
               >
                    {icon}
               </IconButton>
               <TextField
                    label={content}
                    variant="standard"
                    color="success"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required={true}
                    fullWidth={true}
                    type={
                         ispass && !showPassword
                              ? "password"
                              : content === "Phone Number"
                              ? "number"
                              : "text"
                    }
                    InputProps={{
                         endAdornment: ispass ? (
                              <InputAdornment position="end">
                                   <IconButton
                                        onClick={() =>
                                             setShowPassword(!showPassword)
                                        }
                                        edge="end"
                                   >
                                        {showPassword ? (
                                             <VisibilityIcon />
                                        ) : (
                                             <VisibilityOffIcon />
                                        )}
                                   </IconButton>
                              </InputAdornment>
                         ) : null,
                    }}
                    sx={{ width: "100%" }}
               />
          </Stack>
     );
}
