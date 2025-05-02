import toast from "react-hot-toast";
import url from "../../url";
import axios from "axios";

export function registerUser(
     name,
     email,
     phone,
     password,
     cfnpassword,
     setName,
     setEmail,
     setPhone,
     setPass,
     setCfnPass,
     setIsLogin
) {
     if (!name || !email || !phone || !password || !cfnpassword) {
          toast.error("Please Fill all the Details");
          return;
     }

     if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
          toast.error("Please enter a valid email address");
          return;
     }

     if (phone.length !== 10) {
          toast.error("Phone Number must be 10 digits");
          return;
     }

     if (password.length < 6) {
          toast.error("Password must be atleast 6 characters long");
          return;
     }

     if (password === cfnpassword) {
          passwordCheck(password);
     } else {
          toast.error("Password are not same");
          return;
     }

     axios.post(`${url}/register`, {
          username: name,
          useremail: email,
          userphone: phone,
          userpassword: password,
     })
          .then((response) => {
               console.log(response);
               toast.success("Welcome to Whatsapp Web\nPlease Login", {
                    duration: 4000,
               });
               setTimeout(() => {
                    setName("");
                    setEmail("");
                    setPhone("");
                    setPass("");
                    setCfnPass("");
               }, 1000);
               setIsLogin(true);
          })
          .catch((err) => {
               console.log(err);
               toast.error(err.response.data.error, {
                    duration: 4000,
               });
          });
}

export function loginUser(email, password, navigate, setIsLogin) {
     if (!email || !password) {
          toast.error("Please Fill all the Details");
          return;
     }

     if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
          toast.error("Please enter a valid email address");
          return;
     }

     axios.post(`${url}/login`, { useremail: email, userpassword: password })
          .then((response) => {
               console.log(response);
               toast.success("Successfully LoggedIn", {
                    duration: 4000,
               });
               navigate(`/${response.data.user.username}`, {
                    state: { user: response.data.user },
               });
          })
          .catch((err) => {
               console.log(err);
               toast.error(err.response, {
                    duration: 4000,
               });
               setIsLogin(false);
          });
}

export function passwordCheck(password) {
     if (password.search(/[0-9]/) === -1) {
          toast.error("Password must contain atleast one number");
          return;
     }
     if (password.search(/[a-z]/) === -1) {
          toast.error("Password must contain atleast one lowercase letter");
          return;
     }
     if (password.search(/[A-Z]/) === -1) {
          toast.error("Password must contain atleast one uppercase letter");
          return;
     }
     if (password.search(/[!@#$%^&*]/) === -1) {
          toast.error("Password must contain atleast one special character");
          return;
     }
}
