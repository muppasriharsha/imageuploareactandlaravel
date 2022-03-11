import  React, {useEffect, useState } from "react";
// import React, { useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form'

import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./component/LoginPage/LoginPage";
import axios from 'axios';
import Swal from 'sweetalert2';
import { BrowserRouter as Router , Routes, Route, Link,
  useNavigate } from "react-router-dom";
  import store from "./component/redux/store";
import EditProduct from "./component/product/edit.component";
import ViewProduct from "./component/product/view.component";
import ProductList from "./component/product/list.component";
import CreateProduct from "./component/product/create.component";
// import { Provider as StoreProvider } from "react-redux";
import { getDefaultNormalizer } from "@testing-library/react";
// 

export const AuthContext = React.createContext(false);

function App() {
  let navigate = useNavigate();
  
  const [isLogged, setIsLogged] = useState(false);
  const [profilepic, setprofilepic] = useState({imgvalue:""});
  
  const allStates = useSelector((state) => state);
  // console.log(allStates)
  let FormHandling = (x) => {
    setIsLogged(x);
  };

const uploadpic=  (event)=>{
  const file=  event.target.files[0];
  console.log(file);
  
//  setprofilepic((prev)=>({...prev,imgvalue:file}));
//   console.log(profilepic.imgvalue)
//   console.log("hello")
  const formdata = new FormData()
  
  formdata.append('profile_picture',file)

  axios.post(`http://localhost:8000/api/picupload`, formdata).then(({data})=>{
      console.log(data)
      setrender(!render)
      Swal.fire({
        icon:"success",
        text:data.message,
             

      })
    
    })
    .catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
    })
    })

};



const [products, setProducts] = useState([])
const [render,setrender]=useState(false)

    useEffect(()=>{
      fetchProducts()
    },[render])

    
    const fetchProducts = async () => {
      await axios.get(`http://localhost:8000/api/getpicture`).then(({data})=>{
          setProducts(data)
          console.table(products)
      })
  }



  return (
//   <Router>
//     <Navbar bg="primary">
//       <Container>
//         <Link to={"/"} className="navbar-brand text-white">
//           Employee Details
//         </Link>
//       </Container>
//     </Navbar>

//     <Container className="mt-5">
//       <Row>
//         <Col md={12}>
//           <Routes>
//             <Route path="/product/create" element={<CreateProduct />} />
//             <Route path="/product/edit/:id" element={<EditProduct />} />
//             <Route path="/product/view/:id" element={<ViewProduct />} />
//             <Route exact path='/' element={<ProductList />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   </Router>);
// }

<AuthContext.Provider value={isLogged}>
{/* <StoreProvider store={store}> */}
      <Navbar bg="primary">
        <Container>
          {!isLogged ? (
            <>
              <Link to={"/login"} className="navbar-brand text-white">
                Login
              </Link>
              <Link to={"/"} className="navbar-brand text-white">
                Employee Details
              </Link>
            </>
          ) : (
            <>
              <Link to={"/"} className="navbar-brand text-white">
                Employee Details
              </Link>
              <div className="navbar-brand text-white">
               
                <label htmlFor="uploadpicture"> 
                

              {/* <img src="https://sb.kaleidousercontent.com/67418/800x533/a5ddfb21a6/persons3-nobg.png" width="50vw" alt=""/> */}
              {products.length > 0 &&
                    products.map((row, key) => {
                      if (row.id == allStates.loginuserid) {
                        return (
                          <span key={key}>
                            
                              <img
                                width="50px"
                                src={`http://localhost:8000/storage/profilepic/image/${row.profile_picture}`}
                              />
                          </span>
                        );
                      } else {
                        return "";
                      }
                    })}
              </label>

              <form>
              <input type="file" id="uploadpicture"
               style={{display:"none"}}
              onChange={uploadpic}
              /></form>


              </div>
              <Link
                to={"/"}
                onClick={() => {
                  FormHandling(false);
                  navigate("/", { replace: true });
                }}
                className="navbar-brand text-white"
              >
                Logout
              </Link>
            </>
          )}
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route
                index
                path="/"
                element={
                  isLogged ? (
                    <ProductList />
                  ) : (
                    <LoginPage handleForm={FormHandling} />
                  )
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/product/create" element={<CreateProduct />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
              <Route path="/product/view/:id" element={<ViewProduct />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      {/* </StoreProvider> */}
    </AuthContext.Provider>
  );
}

export default App;