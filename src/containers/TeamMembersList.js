import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayTeamMember } from '../actions';
import PropTypes from 'prop-types';
import {  useHistory } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 500,
    marginLeft: theme.spacing(50),
    marginTop: theme.spacing(5)
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

function TeamMemberList(props) {
  const { classes } = props;
  const departments = useSelector(state => state.departments)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClicked = (team_member) => {
  dispatch(displayTeamMember(team_member))
  history.push(`/team_members/${team_member.id}`)
  debugger
  }
 
  return (
    <List className={classes.root} subheader={<li />}>
      {departments.map(department => (
        <li key={`section-${department.id}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{` ${department.name}`}</ListSubheader>
            {department.team_members.map(team_member => (
              <ListItem dense button key={team_member.id}
              onClick={() => handleClicked(team_member)}>
                <ListItemText primary={`${team_member.name}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}

TeamMemberList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamMemberList);