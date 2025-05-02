import { Box, Divider } from "@mui/material";
import Navigation from "./Navigation";
import Search from "./Search";
import { useState } from "react";
import AddFriend from "./AddFriend";

export default function Left({ user }) {
     const [search, setSearch] = useState("");
     const [add, setAdd] = useState(false);

     return (
          <Box className="w-[30%] flex flex-col bg-[#ECFFE6]">
               <Navigation
                    user={user}
                    search={search}
                    setSearch={setSearch}
                    add={add}
                    setAdd={setAdd}
               />
               <Divider />
               {search && <Search />}
               <Divider />
               {add && <AddFriend />}
          </Box>
     );
}
