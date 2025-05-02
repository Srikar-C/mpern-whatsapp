import { Box, Button } from "@mui/material";
import StackComponent from "../../UserComponents/StackComponent";
import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";

export default function AddFriend() {
     const [name, setName] = useState("");
     const [phone, setPhone] = useState("");

     return (
          <Box className="w-full flex flex-col items-center gap-5 p-5 shadow-inner shadow-[#000]">
               <Box className="w-full flex flex-col gap-1 items-center">
                    <StackComponent
                         content="User Name"
                         value={name}
                         setValue={setName}
                         icon={<PersonIcon sx={{ fontSize: "20px" }} />}
                    />
                    <StackComponent
                         content="Phone Number"
                         value={phone}
                         setValue={setPhone}
                         icon={<LocalPhoneIcon sx={{ fontSize: "20px" }} />}
                    />
               </Box>
               <Button
                    color="success"
                    variant="contained"
                    sx={{ margin: "0px auto", width: "40%" }}
               >
                    Add
               </Button>
          </Box>
     );
}
