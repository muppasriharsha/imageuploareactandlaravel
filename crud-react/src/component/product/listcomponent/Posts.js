import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useSelector } from "react-redux";
import { AiFillDelete , AiFillEdit ,AiFillEye} from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";

const Posts = ({ posts, loading,tryp ,postsPerPage}) => {
const [a,seta]=useState();
    const allStates = useSelector((state) => state);
    // let num =allStates.loginuserid;
    // console.log(posts)

  

    if (loading) {
    return <h2>Loading...</h2>;
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
        posts()
      }).catch(({response:{data}})=>{
        Swal.fire({
            text:data.message,
            icon:"error"
        })
      })
}
// const tryp=(e)=>{
// seta(e.target.value)

// };
  return (
<div className="container">
           <div className="row">
             <div className='col-12'>
             Show no.of records/page<input type="number" placeholder='Enter no.of records' 
             style={{width:"3vw"}}
              defaultValue={postsPerPage}
              min="1"
              onChange={(e)=>tryp(e.target.value)}/>
                 <Link className=' mb-2 float-end' to={"/product/create"}>
                 <FiPlusCircle size={32}/>
                 </Link>
             </div>
             <div className="col-12">
                 <div className="card card-body">
                     <div className="table-responsive">
                     <ul className='list-group mb-4'>
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
      {posts.map(post => 
      {
          if(post.Create_By == allStates.loginuserid){
              return (
        <tr key={post.id} >

                            <td>{post.FirstName}</td>
                            <td>{post.LastName}</td>
                            <td>{post.Email_ID}</td>
                            <td>{post.State_ID}</td>
                            <td>{post.City_ID}</td>
                            <td>
                              <img
                                width="50px"
                                src={`http://localhost:8000/storage/product/image/${post.image}`}
                                alt=""
                              />
                            </td>
                           
                            <td>
                              <Link
                                to={`/product/view/${post.user_Id}`}
                                className="btn btn-secondary me-2"
                              >
                                <AiFillEye size={20}/>
                              </Link>
                              <Link
                                to={`/product/edit/${post.user_Id}`}
                                className="btn btn-success me-2"
                              >
                                <AiFillEdit size={20}/>
                              </Link> 
                              <span
                                variant="danger"
                                className="btn btn-danger"
                                onClick={() => deleteProduct(post.user_Id)}
                              >
                                <AiFillDelete size={20}/>
                              </span>
                            </td>
                </tr>
                        );}
                }
                        )}
                </tbody>
                        </table>
    </ul> 
    </div>
                     </div>
                 </div>
             </div>
            </div>
   
  );
};

export default Posts;
