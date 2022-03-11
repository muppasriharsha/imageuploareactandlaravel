
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { DataGrid } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';

export default function List() {
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'FirstName', headerName: 'First name', width: 130 },
    { field: 'LastName', headerName: 'Last name', width: 130 },
    { field: 'Email_ID', headerName: 'Email_ID', width: 130 },
    { field: 'State_ID', headerName: 'State_ID', width: 130 },
    { field: 'City_ID', headerName: 'City_ID', width: 130 },
    { field: 'image', headerName: 'image', width: 130
    // ,
    // renderCell: () => (
    //   <strong>
    //   {products.length > 0 &&
    //                 products.map((row, key) => {
    //                   if (row.Create_By == allStates.loginuserid) {
    //                     return (
    //                       <span key={key}>
                           
    //                         <td>
    //                           <img
    //                             width="50px"
    //                             src={`http://localhost:8000/storage/product/image/${row.image}`}
    //                             alt=""
    //                           />
    //                         </td>
                          
    //                       </span>
    //                     );
    //                   } else {
    //                     return "";
    //                   }
    //                 })}   
    //   </strong>
    // ), 
  },
    { field: 'Action', headerName: 'Action', width: 500
    ,
    renderCell:()=>{
      <div>hai</div>
    }
  
    // renderCell: () => (
    //   <strong>
    //     {products.length > 0 &&
    //                 products.map((row, key) => (
                  
    //                       <span key={key}>
                           
                       
    //                           <Link
    //                             to={`/product/view/${row.wsuser_Id}`}
    //                             className="btn btn-success me-2"
    //                           >
    //                             view
    //                           </Link>
    //                           <Link
    //                             to={`/product/edit/${row.user_Id}`}
    //                             className="btn btn-success me-2"
    //                           >
    //                             Edit
    //                           </Link>
    //                           <button
    //                             variant="danger"
    //                             className="btn btn-success me-2"
    //                             onClick={() => deleteProduct(row.user_Id)}
    //                           >
    //                             Delete
    //                           </button>
                            
    //                       </span>
    //                     )
                     
    //                 )}
    //   </strong>
    // ),
  },

    
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  
  // const rows = [
  //   {products.length > 0 &&
  //     products.map((row, key) => {
  //       if (row.Create_By == allStates.loginuserid) {
  //         return (
  //           <tr key={key}>
  //             <td>{row.FirstName}</td>
  //             <td>{row.LastName}</td>
  //             <td>{row.Email_ID}</td>
  //             <td>{row.State_ID}</td>
  //             <td>{row.City_ID}</td>
  //             <td>
  //               <img
  //                 width="50px"
  //                 src={`http://localhost:8000/storage/product/image/${row.image}`}
  //                 alt=""
  //               />
  //             </td>
             
  //             <td>
  //               <Link
  //                 to={`/product/view/${row.user_Id}`}
  //                 className="btn btn-success me-2"
  //               >
  //                 view
  //               </Link>
  //               <Link
  //                 to={`/product/edit/${row.user_Id}`}
  //                 className="btn btn-success me-2"
  //               >
  //                 Edit
  //               </Link>
  //               <Button
  //                 variant="danger"
  //                 onClick={() => deleteProduct(row.user_Id)}
  //               >
  //                 Delete
  //               </Button>
  //             </td>
  //           </tr>
  //         );
  //       } else {
  //         return "";
  //       }
  //     })}
  // ];
  
  


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
                                </tr>
                            </thead>
                          
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

            <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        // rows={rows}
        rows={products}
        getRowId = {(row) => row.user_Id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>

          </div>
      </div>
    )
}