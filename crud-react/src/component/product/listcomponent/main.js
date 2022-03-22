import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Paginatio from './Pagination';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './App.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Main = () => { 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setpostsperpage] = useState(2);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:8000/api/products');
      
        setPosts(res.data); 
      
      setLoading(false);
    };

    fetchPosts();
  }, []);
  // console.log(posts[0].user_Id)
  // for(let i=0;i<=posts.length;i++){
    
  //   console.log(posts[i])
  // }
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  

  // const paginate = pageNumber => setCurrentPage({page});




  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    // setPage(value);
    setCurrentPage(value);

  };
const tryp=(e)=>{
  if(e.length>=1){
    setpostsperpage(e)
  }
}

  return (
    <div className='container mt-5'>
    {/* <div className='col-12'>
                 <Link className='btn btn-primary mb-2 float-end' to={"/product/create"}>
                     Create
                 </Link>
            </div> */}
             {/* Show no.of records/page <input type="number" placeholder='Enter no.of records'
              defaultValue={postsPerPage}
              min="1"
              onChange={(e) => setpostsperpage(e.target.value)}/> */}
         
      <Posts posts={currentPosts} loading={loading} tryp={tryp} postsPerPage={postsPerPage} />
      {/* <Paginatio
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}

<nav>
      <ul className='pagination'>
        {/* {page} */}
        {posts.length > postsPerPage  ?(
      <Stack spacing={2}>
      <Pagination count={pageNumbers.length}   onChange={handleChange} color="primary" />
</Stack>): ""}



        {/* {totalPosts > postsPerPage  ?
        (
          pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} boundarycount={2} siblingcount={0} className='page-link'>
             {number}
            </a>
          </li>
        )))
        : (
          <> </>
        )} */}
      </ul>
    </nav>
    </div>
  );

};

export default Main;
