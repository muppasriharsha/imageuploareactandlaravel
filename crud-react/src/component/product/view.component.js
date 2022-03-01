import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams,Link } from 'react-router-dom'
import axios from 'axios';
// import Swal from 'sweetalert2';

export default function ViewUser() {
//   const navigate = useNavigate();

//   const { id } = useParams()

//   const [FirstName, setFirstName] = useState("")
//   const [LastName, setLastName] = useState("")
//   const [Email_ID, setEmail_ID] = useState("")
//   const [State_ID, setState_ID] = useState("")
//   const [City_ID, setCity_ID] = useState("")
//   const [image, setImage] = useState(null)
//   const [validationError,setValidationError] = useState({})

//   useEffect(()=>{
//     // fetchProduct()
   
//   },[])



  const [products, setProducts] = useState([])
//   const [images, setimages] = useState("")

  useEffect(()=>{
    fetchProducts() 
  },[])

  const fetchProducts = async () => {
      await axios.get(`http://localhost:8000/api/products`).then(({data})=>{
          setProducts(data)
      })
  }




//   const fetchProduct = async () => {
//     await axios.get(`http://localhost:8000/api/products/${id}`).then(({data})=>{
//       const { FirstName, LastName,Email_ID,State_ID,City_ID,image } = data.product
//       setFirstName(FirstName)
//       setLastName(LastName)
//       setEmail_ID(Email_ID)
//       setState_ID(State_ID)
//       setCity_ID(City_ID)
//     //   setimages(image)

//     }).catch(({response:{data}})=>{
//       Swal.fire({
//         text:data.message,
//         icon:"error"
//       })
//     })
//   }



  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/"}>
                    Back
                </Link>
            </div>
              <h4 className="card-title">View</h4>
              <hr />
              {/* <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                } */}
                {/* onSubmit={updateProduct} */}
                {/* <Form >
                <Row> 
                      <Col>
                        <Form.Group controlId="FirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" disabled value={products.FirstName} />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="LastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" disabled value={LastName} />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Email_ID">
                            <Form.Label>Email_ID</Form.Label>
                            <Form.Control type="email"  disabled value={Email_ID} />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="State_ID">
                            <Form.Label>State_ID</Form.Label>
                            <Form.Control type="text" disabled value={State_ID} />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="City_ID">
                            <Form.Label>City_ID</Form.Label>
                            <Form.Control type="text" disabled value={City_ID} />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <img width="50px" src={'http://localhost:8000/storage/product/image/{image}'} /> */}

                  {
                                    products.length > 0 && (
                                        products.map((row, key)=>(
                                            <tr key={key}>
                                                  <Row> 
                      <Col>
                        <Form.Group controlId="FirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" disabled value={row.FirstName} style={{width:"35vw"}}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="LastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" disabled value={row.LastName} />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Email_ID">
                            <Form.Label>Email_ID</Form.Label>
                            <Form.Control type="email"  disabled value={row.Email_ID} />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="State_ID">
                            <Form.Label>State_ID</Form.Label>
                            <Form.Control type="text" disabled value={row.State_ID} />
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="City_ID">
                            <Form.Label>City_ID</Form.Label>
                            <Form.Control type="text" disabled value={row.City_ID} />
                        </Form.Group>
                      </Col>  
                  </Row>
                                                {/* <Row>{row.FirstName}</Row>
                                                <Row>{row.LastName}</Row>
                                                <Row>{row.Email_ID}</Row>
                                                <Row>{row.State_ID}</Row>
                                                <Row>{row.City_ID}</Row> */}
                                                {/* // <td> */}
                                                <Row> 
                      <Col>
                                                    <img width="50px"  style={{margin:"10px"}} src={`http://localhost:8000/storage/product/image/${row.image}` } />
                                                {/* </td> */} </Col>  
                  </Row>
                                                
                                            </tr>
                                        ))
                                    )
                                }
                            
                {/* </Form> */}
              {/* </div> */}
              <Link to={"/"} >
                  <Button variant="primary" className="mt-2" size="lg" block="block" style={{margin:"5px"}}>
                  Cancle
                  </Button>
        </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}