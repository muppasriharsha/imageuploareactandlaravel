import React, { useState, useEffect, useContext} from "react";
import { useDispatch } from "react-redux";
import "./LoginPage.css";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import axios from 'axios';
import Swal from 'sweetalert2';
import { upload } from "../redux/action.js";
export default function LoginPage({ handleForm }) {
  const [enteredCredentials, setEnteredCredentials] = useState({
    userName: "",
    password: "",
  });
  // const[loginuserid,setloginuserid] = useState("");

  const dispatch = useDispatch();

  
  // const [userlogin,setuserlogin] = useState("")
// const [name,setname] = useState()

//   useEffect(()=>{
//     fetchuserlogin() 
// },[])

// const fetchuserlogin = async () => {
//     await axios.get(`http://localhost:8000/api/userslogin`).then(({data})=>{
//         setuserlogin(data)
//         // const { name } = data
//         // setuserlogin(name)
//         console.log("hai")
//         // console.table(userlogin)
//         console.log(userlogin[0])

                     
//     })
// }

//   const uName = "admin";
  let navigate = useNavigate();
  const location = useLocation();

  const submitForm = (e) => {
    // console.log(enteredCredentials);
    // e.preventDefault();
    // console.log(enteredCredentials);
    // if (
    //   enteredCredentials.password == uName &&
    //   enteredCredentials.userName == uName
    // ) {
    //   handleForm(true);
    //   navigate("/", { replace: true });
    // } else {
    //   handleForm(false);
    // }
    e.preventDefault();

    const formData = new FormData()

    formData.append('name',  enteredCredentials.userName)
    formData.append('password', enteredCredentials.password )
  
    // /await
     axios.post(`http://localhost:8000/api/userslogin`, formData).then(({data})=>{
      console.log(data.userid[0].id)

      const x=data.userid[0].id;
      console.log(x)
      // setloginuserid(data.userid[0]);
      // console.log(loginuserid)
      dispatch(
        upload({
          loginuserid: x,
        })
      );
      // Swal.fire({
      //   icon:"success",
      //   text:data.message,
             

      // })
      handleForm(true);
        navigate("/", { replace: true });
      // navigate("/")
    })
    .catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
    })
    })
    
    //   if(response.status===422){
    //     // setValidationError(response.data.errors)
    //     console.log("hello")
    //   }})
    // if (
      //   enteredCredentials.password == uName &&
      //   enteredCredentials.userName == uName
      // ) {
      //   handleForm(true);
      //   navigate("/", { replace: true });
      // } else {
      //   handleForm(false);
      // }
  };
  // console.log(location.pathname);
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Please Login to continue</h1>
                                      
      <form className="log-frm">
        Name/EmailId
        <input
          className="lg-inp"
          type="text"
          placeholder={"Please Enter Your Name"}
          onChange={(e) => {
            setEnteredCredentials((prev) => {
              return { ...prev, userName: e.target.value };
            });
          }}
        />
        password
        <input
          className="lg-inp"
          type="text"
          placeholder={"Enter Your Email"}
          onChange={(e) => {
            setEnteredCredentials((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />
        <button className="subbtn" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}