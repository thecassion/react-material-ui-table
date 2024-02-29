import React ,{useDebugValue} from 'react';
import clsx from 'clsx';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MenuOutlinedIcon from '@mui/icons-material/MoreVert'
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/material/styles';
import PropTypes from 'prop-types';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import tableToolbarStyle from './../styles/components/tableToolbarStyle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
const useToolbarStyles = makeStyles(tableToolbarStyle);


const RESPONSIVE_FULL_WIDTH_NAME = 'scrollFullHeightFullWidth';

  const  EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected, filterBoutton, exporter, options } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="h6" id="tableTitle">
              {props.label}
            </Typography>
          )}
        </div>
        {/* <div className={classes.spacer} /> */}
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <React.Fragment>
            <Tooltip title="options">
              <IconButton aria-label="" onClick={handleClick}>
                <MenuOutlinedIcon />
              </IconButton>
            </Tooltip> {(options && options.selectedMenu && options.selectedMenu.length>0) &&
                  <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  >
                    {options.selectedMenu.map((menu)=>(<MenuItem onClick={handleClose}  >{menu}</MenuItem>)
                    )}
                  </Menu>
                }
              </React.Fragment>
          ) : (
            <div>
            {filterBoutton?
              filterBoutton:(
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list"
              classeName={{ root: classes.icon }}>
                <FilterListIcon />
              </IconButton>
            </Tooltip>)}

            {options && options.exporter?
              options.exporter:(
            <Tooltip title="Export list">
              <IconButton aria-label="Export list"
              classeName={{ root: classes.icon }}>
                <CloudDownloadIcon />
              </IconButton>
            </Tooltip>)}
            </div>
          )}
          {options && options.searchBar &&
            <TextField
            name="search"
            label="search"
            onChange={options.onSearchTextChange}
            />
            }
        </div>
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  };

  export default EnhancedTableToolbar;