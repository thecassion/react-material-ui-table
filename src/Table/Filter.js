import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const Filter = (props)=>(
    <React.Fragment>
      {
    props.filter && (
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
      {props.filter}
      </TableRow>
  )
    }
  </React.Fragment>
  );

  export default Filter;