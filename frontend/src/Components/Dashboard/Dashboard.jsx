import { useLocation } from "react-router-dom";
import Left from "./LeftBar/Left";
import Right from "./RightBar/Right";
import { Box } from "@mui/material";

export default function Dashboard() {
     const location = useLocation();
     const { user } = location.state || {};

     return (
          <Box className="w-screen h-screen flex">
               <Left user={user} />
               <Right user={user} />
          </Box>
     );
}
