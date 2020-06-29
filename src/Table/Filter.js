import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
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