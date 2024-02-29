const tableToolbarStyle = theme => (
    {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
        },
        highlight:
          theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.secondary.light,
              }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
              },
        spacer: {
          flex: '1 1 100%',
        },
        actions: {
          color: theme.palette.text.secondary,
        },
        title: {
          flex: '0 0 auto',
        },
        fullWidthRoot: {},
        left: {
          flex: '1 1 auto',
        },
        fullWidthLeft: {
          flex: '1 1 auto',
        },
        actions: {
          flex: '1 1 auto',
          textAlign: 'right',
        },
        fullWidthActions: {
          flex: '1 1 auto',
          textAlign: 'right',
        },
        titleRoot: {},
        titleText: {},
        fullWidthTitleText: {
          textAlign: 'left',
        },
        icon: {
          '&:hover': {
            color: theme.palette.primary.main,
          },
        },
        iconActive: {
          color: theme.palette.primary.main,
        },
        filterPaper: {
          maxWidth: '50%',
        },
        searchIcon: {
          display: 'inline-flex',
          marginTop: '10px',
          marginRight: '8px',
        },
        [theme.breakpoints.down('sm')]: {
          titleRoot: {},
          titleText: {
            fontSize: '16px',
          },
          spacer: {
            display: 'none',
          },
          left: {
            // flex: "1 1 40%",
            padding: '8px 0px',
          },
          actions: {
            // flex: "1 1 60%",
            textAlign: 'right',
          },
        },
        [theme.breakpoints.down('xs')]: {
          root: {
            display: 'block',
          },
          left: {
            padding: '8px 0px 0px 0px',
          },
          titleText: {
            textAlign: 'center',
          },
          actions: {
            textAlign: 'center',
          },
        },
        '@media screen and (max-width: 480px)': {},
      }
);


  export default tableToolbarStyle;