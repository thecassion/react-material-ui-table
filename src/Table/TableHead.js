import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import Filter from './Filter';

export default function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headRows } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'Select all desserts' }}
            />
          </TableCell>
          {headRows.map(row => (
            <TableCell
              alignCenter
              key={row.id}
              align={row.numeric ? 'right' : 'left'}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
        <Filter filter={props.filter}/>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    headRows: PropTypes.array.isRequired,
  };