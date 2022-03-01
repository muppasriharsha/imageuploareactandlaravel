import React, { useState, useEffect, useContext } from "react";
import "./LoginPage.css";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import axios from 'axios';
import Swal from 'sweetalert2';
export default function LoginPage({ handleForm }) {
  const [enteredCredentials, setEnteredCredentials] = useState({
    userName: "",
    password: "",
  });
  
//   const [userlogin,setuserlogin] = useState({})
// const[hai,sethai]=useState("fine")
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
  
console.log(formData.image)
    // await 
    axios.post(`http://localhost:8000/api/userslogin`, formData).then(({data})=>{
      console.log(data.datax)
      Swal.fire({
        icon:"success",
        text:data.datax
        

      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        // setValidationError(response.data.errors)
        console.log("hello")
      }})
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