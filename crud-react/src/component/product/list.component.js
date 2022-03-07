// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'
// import axios from 'axios';
// import Swal from 'sweetalert2'

// export default function List() {

//     const [products, setProducts] = useState([])

//     useEffect(()=>{
//         fetchProducts() 
//     },[])

//     const fetchProducts = async () => {
//         await axios.get(`http://localhost:8000/api/products`).then(({data})=>{
//             setProducts(data)
//             // console.table(data)
//             // console.log(products)
 
//         })
//     }

//     const deleteProduct = async (id) => {
//         const isConfirm = await Swal.fire({
//             title: 'Are you sure?',
//             // text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Delete'
//           }).then((result) => {
//             return result.isConfirmed
//           });

//           if(!isConfirm){
//             return;
//           }

//           await axios.delete(`http://localhost:8000/api/products/${id}`).then(({data})=>{
//             Swal.fire({
//                 icon:"success",
//                 text:data.message
//             })
//             fetchProducts()
//           }).catch(({response:{data}})=>{
//             Swal.fire({
//                 text:data.message,
//                 icon:"error"
//             })
//           })
//     }

//     return (
//       <div className="container">
//           <div className="row">
//             <div className='col-12'>
//                 <Link className='btn btn-primary mb-2 float-end' to={"/product/create"}>
//                     Create 
//                 </Link>
//             </div>
//             <div className="col-12">
//                 <div className="card card-body">
//                     <div className="table-responsive">

//                         <table className="table table-bordered mb-0 text-center">
//                             <thead>
//                                 <tr>
//                                     <th>FirstName</th>
//                                     <th>LastName</th>
//                                     <th>Email_ID</th>
//                                     <th>State_ID</th>
//                                     <th>City_ID</th>
//                                     <th>Image</th>
//                                     <th>Actions</th>
//                                     <th>Create_By</th>

//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     // print_r(products);
//                                     products.length > 0 && (
//                                         products.map((row, key)=>{
                                               
//                                             <tr key={key}>
//                                                 <td>{row.FirstName}</td>
//                                                 <td>{row.LastName}</td>
//                                                 <td>{row.Email_ID}</td>
//                                                 <td>{row.State_ID}</td>
//                                                 <td>{row.City_ID}</td>
//                                                 <td>{row.Create_By}</td>

//                                                 <td>
//                                                     <img width="50px" src={`http://localhost:8000/storage/product/image/${row.image}`} />
//                                                 </td>
                                                
//                                                 <td>
//                                                 <Link to={`/product/view/${row.user_Id}`} className='btn btn-success me-2'>
//                                                         view
//                                                     </Link>
//                                                     <Link to={`/product/edit/${row.user_Id}`} className='btn btn-success me-2'>
//                                                         Edit
//                                                     </Link>
//                                                     <Button variant="danger" onClick={()=>deleteProduct(row.user_Id)}>
//                                                         Delete
//                                                     </Button>
//                                                 </td>
//                                             </tr>
                                           
//                                         })
//                                     )
//                                 }
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//           </div>
//       </div>
//     )
// }





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'

export default function List() {
    const allStates = useSelector((state) => state);
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchProducts() 
    },[])

    const fetchProducts = async () => {
        await axios.get(`http://localhost:8000/api/products`).then(({data})=>{
            setProducts(data)
        })
    }

    const deleteProduct = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/api/products/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchProducts()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/product/create"}>
                    Create
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                <th>FirstName</th>
                                     <th>LastName</th>
                                     <th>Email_ID</th>
                                     <th>State_ID</th>
                                     <th>City_ID</th>
                                     <th>Image</th>
                                     <th>Actions</th>
                                     {/* <th>Create_By</th> */}
                                </tr>
                            </thead>
                            {/* <tbody>
                                {
                                    products.length > 0 && (
                                        products.map((row, key)=>{
                                            if(row.Create_By == 1)
                                            {
                                                return(
                                            <tr key={key}>
                                                <td>{row.FirstName}</td>
                                                 <td>{row.LastName}</td>
                                                 <td>{row.Email_ID}</td>
                                                 <td>{row.State_ID}</td>
                                                 <td>{row.City_ID}</td>
                                                 
                                                <td>
                                                    <img width="50px" src={`http://localhost:8000/storage/product/image/${row.image}`} />
                                                </td>
                                                <td>
                                                <Link to={`/product/view/${row.user_Id}`} className='btn btn-success me-2'>
                                                        view
                                                    </Link>
                                                    <Link to={`/product/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                            );
                                        }
                                        else
                                        {
                                            return "";
                                        }
                                    }
                                     )
                            }
                            </tbody> */}
<tbody>
                  {products.length > 0 &&
                    products.map((row, key) => {
                      if (row.Create_By == allStates.loginuserid) {
                        return (
                          <tr key={key}>
                            <td>{row.FirstName}</td>
                            <td>{row.LastName}</td>
                            <td>{row.Email_ID}</td>
                            <td>{row.State_ID}</td>
                            <td>{row.City_ID}</td>
                            <td>
                              <img
                                width="50px"
                                src={`http://localhost:8000/storage/product/image/${row.image}`}
                                alt=""
                              />
                            </td>
                           
                            <td>
                              <Link
                                to={`/product/view/${row.user_Id}`}
                                className="btn btn-success me-2"
                              >
                                view
                              </Link>
                              <Link
                                to={`/product/edit/${row.user_Id}`}
                                className="btn btn-success me-2"
                              >
                                Edit
                              </Link>
                              <Button
                                variant="danger"
                                onClick={() => deleteProduct(row.user_Id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      } else {
                        return "";
                      }
                    })}
                </tbody>

                            
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}