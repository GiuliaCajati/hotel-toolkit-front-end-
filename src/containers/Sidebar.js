import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from 'react-router-dom' 
import { createMuiTheme } from '@material-ui/core/styles/index'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { useSelector, useDispatch } from 'react-redux';
import { setLogOutState } from '../actions';
import {  useHistory } from "react-router-dom";
const drawerWidth = 240;

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#e3f2fd',
      main: '#e3f2fd',
      dark: '#e3f2fd',
      contrastText: '#000'
    },
    secondary: {
      light: '#6ec6ff',
      main: '#000',
      dark: '#0069c0',
      contrastText: '#000',
    },
    error: {
      main: '#000',
      light: '#000',
      dark: '#000',
      contrastText: '#000',
    },
    divider: '#babdbe',
    action: {
      active: '#eceff1',
      hover: '#eceff1',
      selected: '#eceff1',
      disabled: '#000',
      disabledBackground: '#000',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#000000',
      hint: '#000000',
      icon: '#000000', 
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      default: '#edf0f2',
      paper: '#edf0f2', //side bar 

    },
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        color: '#000000',
        backgroundColor: '#e3f2fd',
        //toolbar background
      }
    },
    MuiIconButton: {
      root: {
        color: '#babdbe',
      }
    },
    MuiSvgIcon: {
      root: {
        fill: '#ffffff',
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    marginLeft: "1pc",
    marginTop: "1pc",
    fontFamily: "serif",
    fontSize:"25px"
  },
  subTitle: {
    marginTop: "-4pc",
    fontSize:"15px"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
 
}));

export default function TestSideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const history = useHistory()
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClicked = () => {
    dispatch(setLogOutState())
    history.push("/login")
}

  return (
<MuiThemeProvider theme={customTheme}>
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}

        >
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
              <b>FRONT DESK</b><div> <i className={classes.subTitle} >Creating Seamless Communication, Hotel Wide</i></div>
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography paragraph>
            
          </Typography>
        
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          
          <Divider />
          <List>
              
              <ListItem button component={Link} to="/welcome" >
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Welcome Page"/>
              </ListItem>

              <ListItem button component={Link} to="/home">
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="My Home Page"/>
              </ListItem>

              <ListItem button component={Link} to="/new_task">
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Add Task"/>
              </ListItem>

              <ListItem button component={Link} to="/events">
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="All Events"/>
              </ListItem>

              <ListItem button component={Link} to="/calendar">
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Calendar"/>
              </ListItem>


              
              {currentUser.length !== 0?(
                <ListItem button onClick={handleClicked} 
                component={Link} to="/login"> 
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Logout"/>
              </ListItem>
                ):(
              <ListItem button component={Link} to="/login">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Login"/>
              </ListItem>)}


          </List>
          <Divider />

          <List>

              <ListItem button component={Link} to="/all_team_members">
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="All Team Members"/>
              </ListItem>

              <ListItem button component={Link} to="/add_team_member" >
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Add User"/>
              </ListItem>

              <ListItem button component={Link} to="/add_event" >
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Add Event"/>
              </ListItem>
              
              {/* <ListItem button component={Link} to="/bulleton_board">
                  <ListItemIcon><InboxIcon /> </ListItemIcon>
                  <ListItemText primary="Bulliton Board"/>
              </ListItem> */}
              
          </List>
          
        </Drawer>
    </div>
  </MuiThemeProvider>
  );
}
