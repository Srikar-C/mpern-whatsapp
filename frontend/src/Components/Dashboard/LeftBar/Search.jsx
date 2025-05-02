import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
     return (
          <Box className="bg-[#399918] text-white flex justify-between items-center h-[10vh] px-3">
               <Box className="bg-[#ECFFE6] flex gap-3 items-center rounded-lg w-[100%] p-2">
                    <SearchIcon
                         sx={{ fontSize: "25px" }}
                         className="text-black"
                    />
                    <input
                         type="text"
                         className="text-black border-none border-b-2 border-black outline-none w-full"
                         placeholder="Search"
                    />
               </Box>
          </Box>
     );
}
