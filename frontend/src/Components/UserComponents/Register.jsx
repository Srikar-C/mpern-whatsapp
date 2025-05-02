import { Box, Button, FormGroup, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StackComponent from "./StackComponent";
import style from "./styles.module.css";
import logo from "../../assets/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import HttpsSharpIcon from "@mui/icons-material/HttpsSharp";
import SendIcon from "@mui/icons-material/Send";
import { registerUser } from "./utils";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Register({
     name,
     setName,
     email,
     setEmail,
     phone,
     setPhone,
     pass,
     setPass,
     cfnPass,
     setCfnPass,
     setIsLogin,
}) {
     return (
          <Box
               className={`register-box w-[100vw] flex items-center relative ${style.bg}`}
          >
               <img
                    src={logo}
                    className="w-[550px] h-[300px] block -rotate-13 absolute left-[1%] top-1/2 -translate-y-1/2"
                    alt="whatsapp web"
               />
               <Box className=" absolute right-[10%] border-2 md:border-4 border-[#399918] rounded-xl flex flex-col gap-6 items-center p-7 shadow-lg shadow-[#fff] bg-[#fafafa] w-[450px]">
                    <Stack gap={2} alignItems="center">
                         <Typography
                              variant="span"
                              className="p-4 rounded-full shadow-inner shadow-black bg-[#ECFFE6] w-fit"
                         >
                              <WhatsAppIcon
                                   sx={{
                                        fontSize: "50px",
                                        color: "#399918",
                                   }}
                              />
                         </Typography>
                         <Typography
                              variant="h4"
                              sx={{
                                   fontWeight: 600,
                                   fontSize: "30px",
                              }}
                              color="#399918"
                         >
                              Register
                         </Typography>
                    </Stack>
                    <FormGroup
                         sx={{
                              width: "300px",
                              gap: "15px",
                         }}
                    >
                         <StackComponent
                              content="User Name"
                              value={name}
                              setValue={setName}
                              icon={<PersonIcon sx={{ fontSize: "20px" }} />}
                         />
                         <StackComponent
                              content="Email Address"
                              value={email}
                              setValue={setEmail}
                              icon={
                                   <EmailIcon
                                        sx={{
                                             fontSize: "20px",
                                        }}
                                   />
                              }
                         />
                         <StackComponent
                              content="Phone Number"
                              value={phone}
                              setValue={setPhone}
                              icon={
                                   <LocalPhoneIcon
                                        sx={{
                                             fontSize: "20px",
                                        }}
                                   />
                              }
                         />
                         <StackComponent
                              content="Password"
                              value={pass}
                              setValue={setPass}
                              icon={
                                   <HttpsOutlinedIcon
                                        sx={{
                                             fontSize: "20px",
                                        }}
                                   />
                              }
                         />
                         <StackComponent
                              content="Confirm Password"
                              value={cfnPass}
                              setValue={setCfnPass}
                              icon={
                                   <HttpsSharpIcon
                                        sx={{
                                             fontSize: "20px",
                                        }}
                                   />
                              }
                         />
                    </FormGroup>
                    <Button
                         color="success"
                         variant="contained"
                         endIcon={<SendIcon />}
                         sx={{ margin: "0px auto", width: "60%" }}
                         onClick={() => {
                              registerUser(
                                   name,
                                   email,
                                   phone,
                                   pass,
                                   cfnPass,
                                   setName,
                                   setEmail,
                                   setPhone,
                                   setPass,
                                   setCfnPass,
                                   setIsLogin
                              );
                         }}
                    >
                         Register
                    </Button>
               </Box>

               <Box
                    className="absolute right-0 h-screen w-fit flex items-center cursor-pointer"
                    onClick={() => setIsLogin(true)}
               >
                    <ChevronRightIcon
                         sx={{
                              fontSize: "50px",
                              color: "#ECFFE6",
                         }}
                    />
                    <Typography
                         className="bg-[#ECFFE6] hover:bg-[#399918] hover:text-[#ECFFE6] uppercase h-screen w-fit shadow-2xl [writing-mode:vertical-rl] [text-orientation:upright] font-bold text-center p-2"
                         sx={{ fontSize: "16px" }}
                    >
                         Login
                    </Typography>
               </Box>
          </Box>
     );
}
