import React from 'react';
import clsx from 'clsx';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import MenuOutlinedIcon from '@mui/icons-material/MoreVert'
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';


const RESPONSIVE_FULL_WIDTH_NAME = 'scrollFullHeightFullWidth';

  const  EnhancedTableToolbar = props => {
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
        sx={(theme) => ({
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
          ...(numSelected > 0 && (theme.palette.mode === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.secondary.light,
              }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
              }))
        })}
      >
        <Box sx={{ flex: '0 0 auto' }}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="h6" id="tableTitle">
              {props.label}
            </Typography>
          )}
        </Box>
        {/* <div className={classes.spacer} /> */}
        <Box sx={(theme) => ({ 
          flex: '1 1 auto',
          textAlign: 'right',
          color: theme.palette.text.secondary
        })}>
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
            <Box>
            {filterBoutton?
              filterBoutton:(
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>)}

            {options && options.exporter?
              options.exporter:(
            <Tooltip title="Export list">
              <IconButton aria-label="Export list">
                <CloudDownloadIcon />
              </IconButton>
            </Tooltip>)}
            </Box>
          )}
          {options && options.searchBar &&
            <TextField
            name="search"
            label="search"
            onChange={options.onSearchTextChange}
            />
            }
        </Box>
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  };

  export default EnhancedTableToolbar;