import React from 'react';
import ReactExport from "react-data-export";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PropTypes from 'prop-types';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Exporter=(props)=>{
    return (
      <ExcelFile element={<Tooltip title={props.title}>
      <IconButton aria-label="Export list"
      //classeName={{ root: classes.icon }}
      >
        <CloudDownloadIcon />
      </IconButton>
    </Tooltip>}>
      <ExcelSheet data={props.data} name={props.sheetName}>
        {props.columns.map(
          (column, index)=>(<ExcelColumn label={column.label} value={column.id}/>)
        )}
      </ExcelSheet>
  </ExcelFile>
    )
  }

  Exporter.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    sheetName: PropTypes.string
  };

  export default Exporter;