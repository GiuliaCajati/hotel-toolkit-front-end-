import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from 'react-router-dom' 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            The Lobby
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            
            <ListItem button component={Link} to="/welcome" >
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Welcome Page"/>
            </ListItem>
     
            <ListItem button component={Link} to="/home">
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Home Page"/>
            </ListItem>
            <ListItem button component={Link} to="/events">
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="All Events"/>
            </ListItem>
            <ListItem button component={Link} to="/welcome">
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="All Updates"/>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button component={Link} to="/add_event" >
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Add Event"/>
            </ListItem>
            <ListItem button component={Link} to="/home">
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Home Page"/>
            </ListItem>
            <ListItem button component={Link} to="/add_team_member" >
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Add User"/>
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Login"/>
            </ListItem>
        </List>
      </Drawer>
 
    </div>
  );
}
