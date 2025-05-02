import { Box, Button, FormGroup, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StackComponent from "./StackComponent";
import EmailIcon from "@mui/icons-material/Email";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import SendIcon from "@mui/icons-material/Send";
import { loginUser } from "./utils";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import style from "./styles.module.css";
import logo from "../../assets/logo.png";

export default function Login({
     email,
     setEmail,
     pass,
     setPass,
     setIsLogin,
     navigate,
}) {
     return (
          <Box
               className={`login-box w-[100vw] flex items-center relative ${style.bg}`}
          >
               <img
                    src={logo}
                    className="w-[550px] h-[300px] block -rotate-13 absolute left-[3%] top-1/2 -translate-y-1/2"
                    alt="whatsapp web"
               />
               <Box className="absolute right-[10%] border-4 border-[#399918] rounded-xl flex flex-col gap-6 items-center p-7 shadow-lg shadow-[#fff] bg-[#fafafa] w-[450px]">
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
                              sx={{ fontWeight: 600 }}
                              color="#399918"
                         >
                              Login
                         </Typography>
                    </Stack>
                    <FormGroup
                         sx={{
                              width: "300px",
                              gap: "15px",
                         }}
                    >
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
                    </FormGroup>
                    <Typography
                         variant="span"
                         className="text-[#399918] text-lg font-semibold cursor-pointer"
                    >
                         Forgot Password
                    </Typography>
                    <Button
                         color="success"
                         variant="contained"
                         endIcon={<SendIcon />}
                         sx={{ margin: "0px auto", width: "60%" }}
                         onClick={() => {
                              loginUser(email, pass, navigate, setIsLogin);
                         }}
                    >
                         Login
                    </Button>
               </Box>

               <Box
                    className="absolute left-0 h-screen w-fit flex items-center cursor-pointer"
                    onClick={() => setIsLogin(false)}
               >
                    <Typography
                         className="bg-[#ECFFE6] hover:bg-[#399918] hover:text-[#ECFFE6] uppercase h-screen w-fit shadow-2xl [writing-mode:vertical-rl] [text-orientation:upright] text-lg font-bold text-center p-2"
                         sx={{ fontSize: "16px" }}
                    >
                         Register
                    </Typography>
                    <ChevronLeftIcon
                         sx={{
                              fontSize: "50px",
                              color: "#ECFFE6",
                         }}
                    />
               </Box>
          </Box>
     );
}
