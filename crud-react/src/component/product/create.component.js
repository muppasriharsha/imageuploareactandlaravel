import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom'

export default function CreateProduct() {
  const navigate = useNavigate();

  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email_ID, setEmail_ID] = useState("")
  const [State_ID, setState_ID] = useState("")
  const [City_ID, setCity_ID] = useState("")

  const [image, setImage] = useState()
  const [validationError,setValidationError] = useState({})

  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('FirstName', FirstName)
    formData.append('LastName', LastName)
    formData.append('Email_ID', Email_ID)
    formData.append('State_ID', State_ID)
    formData.append('City_ID', City_ID)
    formData.append('image', image)
console.log(formData.image)
    await axios.post(`http://localhost:8000/api/products`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

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
              <h4 className="card-title">Add Employee</h4>
              <hr />
              <div className="form-wrapper">
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
                }
                <Form onSubmit={createProduct}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="FirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" value={FirstName} onChange={(event)=>{
                              setFirstName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="LastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" value={LastName} onChange={(event)=>{
                              setLastName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Email_ID">
                            <Form.Label>Email_ID</Form.Label>
                            <Form.Control type="email" value={Email_ID} onChange={(event)=>{
                              setEmail_ID(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="State_ID">
                            <Form.Label>State_ID</Form.Label>
                            <Form.Control type="text" value={State_ID} onChange={(event)=>{
                              setState_ID(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="City_ID">
                            <Form.Label>City_ID</Form.Label>
                            <Form.Control type="text" value={City_ID} onChange={(event)=>{
                              setCity_ID(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
              
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Save
                  </Button>
                 
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}