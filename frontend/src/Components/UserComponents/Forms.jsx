import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import HttpsSharpIcon from "@mui/icons-material/HttpsSharp";
import SendIcon from "@mui/icons-material/Send";
import { Stack, Typography, Box, FormGroup, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StackComponent from "./StackComponent";
import { loginUser, registerUser } from "./utils";
import { Toaster } from "react-hot-toast";
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

export default function Forms() {
     const [isLogin, setIsLogin] = useState(false);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [pass, setPass] = useState("");
     const [cfnPass, setCfnPass] = useState("");
     const navigate = useNavigate();

     return (
          <Box className={`overflow-hidden h-screen relative`}>
               <Toaster />
               <Box
                    className={`flex w-[200vw] h-full transition-transform duration-500  ${
                         isLogin ? "-translate-x-[100vw]" : "translate-x-0"
                    }`}
               >
                    <Register
                         name={name}
                         setName={setName}
                         email={email}
                         setEmail={setEmail}
                         phone={phone}
                         setPhone={setPhone}
                         pass={pass}
                         setPass={setPass}
                         cfnPass={cfnPass}
                         setCfnPass={setCfnPass}
                         setIsLogin={setIsLogin}
                    />
                    <Login
                         email={email}
                         setEmail={setEmail}
                         pass={pass}
                         setPass={setPass}
                         setIsLogin={setIsLogin}
                         navigate={navigate}
                    />
               </Box>
          </Box>
     );
}
