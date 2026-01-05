import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link} from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import EnhancedTableHead from './TableHead';
import EnhancedTableToolbar from './TableToolbar';
import TablePagination from '@mui/material/TablePagination';


function MyTable(props) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = props.data.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  }
  const getSelectedRows = (s)=>{
    if(props.getSelectedRows){
      props.getSelectedRows(s);
    }
  }

  const initializeSelected=(s)=>{
      if(props.options){
        if(props.options.initializeSelected){
            props.options.initializeSelected(s);
          }
      }
  }

  React.useEffect(()=>{
    getSelectedRows(selected);
    initializeSelected(setSelected);
  })

  function handleChangePage(event, newPage) {
  }
  function handleChangeDense(event) {
    setDense(event.target.checked);
  }


  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, (props.data?props.data.length:0) - page * rowsPerPage);

  return (
    <Paper sx={{ 
      width: '100%',
      mt: 3,
      overflowX: 'auto'
    }}>
      <EnhancedTableToolbar options={props.options} numSelected={selected.length} label="" />
      <Box sx={{ overflowX: 'auto' }}>
      {(props.loading!==0) &&
      <Table sx={{ 
        minWidth: 650,
        overflowX: 'auto'
      }} >
      <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.data?props.data.length:0}
              headRows={props.headRows}
              filter={props.filter}
            />
        <TableBody>
          {(props.data?props.data:[]).map((row,index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (<TableRow key={row["id"]}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              selected={isItemSelected}
            >
            <TableCell
             onClick={event => {
               if((parseInt(row.not_selectable)!==1)){
                handleClick(event, row.id);
               }
              }}
             padding="checkbox">
              <Checkbox
                checked={isItemSelected}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </TableCell>
            {props.children}
              {
              props.headRows.map((col,myIndex)=>{
                    if(col.to!=null){
                      return <TableCell alignCenter key={myIndex+"-"+row["id"]}><Link to={ col.to.link + row[col.to.rowName] } >{row[col.id]}</Link> </TableCell>
                    }else{
                      return <TableCell alignCenter key={myIndex+"-"+row["id"]}>{row[col.id]}</TableCell>
                    }
              })
            }
            </TableRow>)
          })}
        </TableBody>
      </Table>
        }
      </Box>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.count}
          rowsPerPage={props.limit}
          page={props.page}
          onPageChange={props.onChangePage}
          onRowsPerPageChange={props.onChangeRowsPerPage}
        />
    </Paper>

  );
}



export default MyTable;
