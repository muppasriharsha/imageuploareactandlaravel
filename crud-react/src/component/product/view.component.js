
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function EditUser() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email_ID, setEmail_ID] = useState("")
  const [State_ID, setState_ID] = useState("")
  const [City_ID, setCity_ID] = useState("")
  const [imag, setImage] = useState(null)
  

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    await axios.get(`http://localhost:8000/api/products/${id}`).then(({data})=>{
      const { FirstName, LastName,Email_ID,State_ID,City_ID,image } = data.product
      setFirstName(FirstName)
      setLastName(LastName)
      setEmail_ID(Email_ID)
      setState_ID(State_ID)
      setCity_ID(City_ID)
      setImage(image)
 
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  


  return (
    <div className="container">
      
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
            <div className='col-12'>
                <Link className=' mb-2 float-end' to={"/"}>
                <IoArrowBackCircleSharp  size={32}/>
                </Link>
            </div>
              <h4 className="card-title">View</h4>
              <hr />
              <div className="form-wrapper">
              
                
                <Form >
                <Row> 
                      <Col>
                        <Form.Group controlId="FirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" disabled value={FirstName} />
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
               
                                                <Row> 
                      <Col>
                                                    <img width="50px"  style={{margin:"10px"}} src={`http://localhost:8000/storage/product/image/${imag}` } />
                                               </Col>  
                  </Row>
                 
                  
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}