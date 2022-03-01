import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./component/LoginPage/LoginPage";

import { BrowserRouter as Router , Routes, Route, Link,
  useNavigate } from "react-router-dom";

import EditProduct from "./component/product/edit.component";
import ViewProduct from "./component/product/view.component";
import ProductList from "./component/product/list.component";
import CreateProduct from "./component/product/create.component";
export const AuthContext = React.createContext(false);

function App() {
  let navigate = useNavigate();
  const [isLogged, setIsLogged] = React.useState(false);
  let FormHandling = (x) => {
    setIsLogged(x);
  };

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
    </AuthContext.Provider>
  );
}

export default App;