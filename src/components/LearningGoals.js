import React from 'react';
import { 
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const LearningGoals = ({ goals }) => {

  const goal = goals.map(goal => {
    return (
      <ListItem disablePadding>
        <ListItemIcon>
          <CheckIcon fontSize='medium'/>
        </ListItemIcon>
        <ListItemText primary={goal} />
      </ListItem>
    )
  })

  return (
    <List
      sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader 
          component="div" 
          id="nested-list-subheader"
          sx={{fontSize: '18px', fontWeight: 'bold', padding: 0}}>
        What will you learn
        </ListSubheader>
      }>
        { goal }
      </List>
    
  )
}

export default LearningGoals;
