import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginatio = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <nav>
      <ul className='pagination'>
        {page}
      <Stack spacing={2}>
      <Pagination count={pageNumbers.length}  page={page} onChange={handleChange} color="primary" />
</Stack>



        {totalPosts > postsPerPage  ?
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
        )}
      </ul>
    </nav>
  );
};

export default Paginatio;
